import { type LabelProps as RekaLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface LabelProps extends RekaLabelProps {
  class?: HTMLAttributes['class']
}

export type { LabelProps }
