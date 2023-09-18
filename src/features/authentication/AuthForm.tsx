import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { formSchema } from './constant';
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

import { login } from '@/services/auth-api';
import ButtonLoader from '@/components/ui/button-loader';
import { useToast } from '@/components/ui/use-toast';

type AuthFormProps = {
  onToggleAuthMode: () => void;
};

export default function AuthForm({ onToggleAuthMode }: AuthFormProps) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const { isLoading, mutate: loginApi } = useMutation({
    mutationFn: login,
    onSuccess: user => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/', { replace: true });
    },
    onError: (error: Error) => {
      form.reset();
      toast({
        title: 'Logging error',
        description: error?.message || 'Invalid login credentials',
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    loginApi({ email: values.email, password: values.password });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="jdoe@example.com"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  type="password"
                  {...field}
                  disabled={isLoading}
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
            disabled={isLoading}
          >
            {isLoading ? <ButtonLoader loadingText="Logging..." /> : 'Login'}
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="text-blue-500"
            onClick={onToggleAuthMode}
            disabled={isLoading}
          >
            Don't have an account? Sign Up
          </Button>
        </div>
      </form>
    </Form>
  );
}
