import { type LabelProps as RekaLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

type LabelProps = RekaLabelProps & { class?: HTMLAttributes['class'] }

export type { LabelProps }
