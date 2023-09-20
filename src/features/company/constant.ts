import * as z from 'zod';

export const formSchema = z.object({
  companyName: z.string().nonempty('Company name required'),
  contact: z.string().nonempty('Provide company contact'),
  email: z.string().email('Provide a valid email'),
  contactPerson: z.string().nonempty('Provide contact person'),
  address: z.optional(z.string()),
  postalCode: z.optional(z.string()),
  city: z.optional(z.string()),
});
