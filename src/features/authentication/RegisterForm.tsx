import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { registerSchema } from './constant';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { signup } from '@/services/auth-api';
import { useNavigate } from 'react-router-dom';

import ButtonLoader from '@/components/ui/button-loader';

type RegisterFormProps = {
  onToggleAuthMode: () => void;
};

export default function RegisterForm({ onToggleAuthMode }: RegisterFormProps) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isLoading: isRegistering, mutate: register } = useMutation({
    mutationFn: signup,
    onError: (error: Error) => {
      toast({
        title: 'Signup Error',
        description: error.message,
      });
    },
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    register(
      {
        email: values.email,
        fullName: values.fullName,
        password: values.password,
      },
      {
        onSuccess: () => {
          navigate('/success-signup-redirect', { replace: true });
        },
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="fullName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="eg Jane Doe"
                  disabled={isRegistering}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="eg test@example.com"
                  disabled={isRegistering}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="password"
                  disabled={isRegistering}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Confirm password"
                  disabled={isRegistering}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:items-center md:justify-between">
          <Button
            type="submit"
            variant="default"
            className="w-full lg:w-max"
            disabled={isRegistering}
          >
            {isRegistering ? (
              <ButtonLoader loadingText="Regestering..." />
            ) : (
              'Register'
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="text-blue-500"
            onClick={onToggleAuthMode}
            disabled={isRegistering}
          >
            Already have an account? Log In
          </Button>
        </div>
      </form>
    </Form>
  );
}
