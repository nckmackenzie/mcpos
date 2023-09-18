import * as z from 'zod';

export const formSchema = z.object({
  email: z.string().email('Invalid email provided'),
  password: z.string().min(8, 'Passwords has to be 8 characters or more'),
});

export const registerSchema = z
  .object({
    fullName: z.string().nonempty('Enter your name'),
    email: z.string().email('Invalid email provided'),
    password: z.string().min(8, 'Passwords has to be 8 characters or more'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
