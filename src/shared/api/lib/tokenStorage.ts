import { parse, serialize } from 'cookie-es'

enum TokenStorageKeys {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
}

const tokenStorage = {
  clearTokens() {
    serialize(TokenStorageKeys.ACCESS_TOKEN, '', { maxAge: 0, path: '/' })
    serialize(TokenStorageKeys.REFRESH_TOKEN, '', { maxAge: 0, path: '/' })
  },
  getAccessToken() {
    return parse(TokenStorageKeys.ACCESS_TOKEN)[TokenStorageKeys.ACCESS_TOKEN]
  },
  getRefreshToken() {
    return parse(TokenStorageKeys.REFRESH_TOKEN)[TokenStorageKeys.REFRESH_TOKEN]
  },
  setTokens({
    accessToken,
    refreshToken,
  }: {
    accessToken: string
    refreshToken: string
  }) {
    serialize(TokenStorageKeys.ACCESS_TOKEN, accessToken)
    serialize(TokenStorageKeys.REFRESH_TOKEN, refreshToken)
  },
}

export { tokenStorage }
