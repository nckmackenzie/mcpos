import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { formSchema } from './constant';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateCompany } from './useCreateCompany';
import ButtonLoader from '@/components/ui/button-loader';

export default function CompanyForm() {
  const { isCreating, createCompany } = useCreateCompany();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      companyName: '',
      contact: '',
      email: '',
      contactPerson: '',
      address: '',
      postalCode: '',
      city: '',
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formValues = {
      ...values,
      postalCode: values.postalCode === '' ? null : values.postalCode,
      city: values.city === '' ? null : values.city,
      address: values.address === '' ? null : values.address,
    };
    createCompany(formValues);
  }

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-12 gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="companyName"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-12 md:col-span-6">
              <FormLabel>
                Company Name<sup>*</sup>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="eg ACME Holdings"
                  {...field}
                  disabled={isCreating}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="contact"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-12 md:col-span-6">
              <FormLabel>
                Contact<sup>*</sup>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="eg 0722123123"
                  {...field}
                  disabled={isCreating}
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
            <FormItem className="col-span-12 md:col-span-6">
              <FormLabel>
                Company Email<sup>*</sup>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="eg test@acme.com"
                  {...field}
                  disabled={isCreating}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="contactPerson"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-12 md:col-span-6">
              <FormLabel>
                Contact Person<sup>*</sup>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="eg Will SMith"
                  {...field}
                  disabled={isCreating}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="address"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-12 md:col-span-6">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="eg ABC Place,Some Road"
                  disabled={isCreating}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="postalCode"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-12 md:col-span-3">
              <FormLabel>Postal Code</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="eg 00100"
                  disabled={isCreating}
                  {...field}
                  maxLength={5}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="city"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-12 md:col-span-3">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="eg Berlin"
                  {...field}
                  disabled={isCreating}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="col-span-6 md:col-span-3"
          disabled={isCreating}
        >
          {isCreating ? <ButtonLoader loadingText="Creating..." /> : 'Save'}
        </Button>
        <Button
          type="reset"
          disabled={isCreating}
          variant="outline"
          className="col-span-6 md:col-span-3"
          onClick={() => form.reset()}
        >
          Reset
        </Button>
      </form>
    </Form>
  );
}
