import { z } from 'zod'

export const loginSchema = z.object({
  docType: z.enum(['dni', 'ce', 'passport']),
  docNumber: z.string().min(8, 'Mínimo 8 dígitos'),
  phone: z
    .string()
    .regex(/^[0-9]+$/, 'Solo números')
    .min(9, 'Mínimo 9 dígitos'),
  acceptPrivacy: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la política de privacidad',
  }),
  acceptComm: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la política de comunicaciones comerciales',
  }),
})
export type LoginFormValues = z.infer<typeof loginSchema>
