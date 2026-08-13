import * as z from 'zod'

export const eventSchema = z.object({
  name: z.string().min(4),
  date: z.coerce.date(),
  theme: z.string()
})