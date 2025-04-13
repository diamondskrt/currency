import type { VariantProps } from 'class-variance-authority'
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import type { buttonVariants } from '../config'

interface ButtonProps extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

type ButtonVariants = VariantProps<typeof buttonVariants>

export type { ButtonProps, ButtonVariants }
