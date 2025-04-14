import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const formSchema = toTypedSchema(
  z.object({
    from_currency: z.string().min(1),
    from_amount: z.number().min(1).positive(),
    to_currency: z.string().min(1),
    to_amount: z.number().min(1).positive(),
  })
)

export { formSchema }
