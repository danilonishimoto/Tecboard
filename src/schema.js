import * as z from 'zod'

export const eventSchema = z.object({
  name: z.string().trim().min(4, 'Nome muito curto').transform((val) => val[0].toUpperCase() + val.slice(1)),
  date: z.coerce.date(),
  theme: z.string()
})