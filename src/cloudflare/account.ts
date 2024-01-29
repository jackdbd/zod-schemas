import { z } from 'zod'

export const id = z.string().min(1).describe('Cloudflare account ID')
