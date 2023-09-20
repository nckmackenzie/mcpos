import { supabase } from '@/supabase/supabase';

export async function getCurrencies(): Promise<Currency[]> {
  const { data: currencies, error } = await supabase
    .from('currencies')
    .select('*');

  if (error) throw new Error(error.message);

  return currencies;
}

export async function createCompany(values: Company) {
  const { data: company, error } = await supabase
    .from('companies')
    .insert([values])
    .select();

  if (error) throw new Error(error.message);

  const { error: userError } = await supabase.auth.updateUser({
    data: { companyId: company[0].id },
  });

  if (userError) throw new Error(userError.message);

  return company[0];
}

export async function getCompany(id: string) {
  const { error, data: company } = await supabase
    .from('companies')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(error.message);

  return company;
}
