import { type FetchOptions, ofetch, type ResponseType } from 'ofetch'
import { z } from 'zod'

import { tokenStorage } from './lib'

interface ApiClientOptions<T> extends FetchOptions<ResponseType, T> {
  signal?: AbortSignal
  schema?: z.ZodSchema<T>
  skipAuth?: boolean
}

interface FetchError {
  status?: number
  message?: string
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

class ApiClient {
  private baseURL: string = import.meta.env.VITE_API_URL
  private accessToken: string | null = tokenStorage.getAccessToken()
  private refreshToken: string | null = tokenStorage.getRefreshToken()
  private isRefreshing = false
  private refreshPromise: Promise<void> | null = null

  private async refreshAccessToken(): Promise<void> {
    if (this.isRefreshing) {
      return this.refreshPromise!
    }

    this.isRefreshing = true
    this.refreshPromise = ofetch<{
      accessToken: string
      refreshToken: string
    }>('/auth/refresh', {
      baseURL: this.baseURL,
      headers: {
        Authorization: `Bearer ${this.refreshToken}`,
      },
      method: 'POST',
    })
      .then((data) => {
        tokenStorage.setTokens({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        })
      })
      .finally(() => {
        this.isRefreshing = false
        this.refreshPromise = null
      })

    return this.refreshPromise
  }

  private async requestWithRetry<T>(
    url: string,
    options: ApiClientOptions<T>
  ): Promise<T> {
    try {
      const headers: Record<string, string> = {
        ...(options.headers as Record<string, string>),
      }

      if (!options.skipAuth && this.accessToken) {
        headers.Authorization = `Bearer ${this.accessToken}`
      }

      const fetchOptions = {
        ...options,
        baseURL: this.baseURL,
        headers,
        responseType: 'json' as const,
      }

      const response = await ofetch<T>(
        url,
        fetchOptions as FetchOptions<'json'>
      )

      if (options.schema) {
        const parsed = options.schema.safeParse(response)
        if (!parsed.success) {
          console.error('Validation failed', parsed.error)
          throw parsed.error
        }
        return parsed.data
      }

      return response
    } catch (error: unknown) {
      const fetchError = error as FetchError
      if (fetchError?.status === 401 && !options.skipAuth) {
        await this.refreshAccessToken()
        return this.requestWithRetry(url, options)
      }
      throw error
    }
  }

  private async handleRequest<T>(
    url: string,
    method: HttpMethod,
    options?: ApiClientOptions<T>
  ): Promise<T> {
    return this.requestWithRetry(url, {
      method,
      ...options,
    })
  }

  get<T>(url: string, options?: ApiClientOptions<T>) {
    return this.handleRequest<T>(url, 'GET', options)
  }

  post<T>(
    url: string,
    body?: Record<string, unknown>,
    options?: ApiClientOptions<T>
  ) {
    return this.handleRequest<T>(url, 'POST', { ...options, body })
  }

  put<T>(
    url: string,
    body?: Record<string, unknown>,
    options?: ApiClientOptions<T>
  ) {
    return this.handleRequest<T>(url, 'PUT', { ...options, body })
  }

  patch<T>(
    url: string,
    body?: Record<string, unknown>,
    options?: ApiClientOptions<T>
  ) {
    return this.handleRequest<T>(url, 'PATCH', { ...options, body })
  }

  delete<T>(url: string, options?: ApiClientOptions<T>) {
    return this.handleRequest<T>(url, 'DELETE', options)
  }
}

const apiClient = new ApiClient()

export { apiClient }
