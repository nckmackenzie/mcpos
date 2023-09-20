import { getCompany } from '@/services/company-api';
import { useQuery } from '@tanstack/react-query';
import { useUser } from '../authentication/useUser';

export function useCompany() {
  const { data } = useUser();
  const companyId = data?.user_metadata?.companyId;
  const {
    error,
    isLoading,
    data: company,
  } = useQuery({
    queryFn: () => getCompany(companyId),
    queryKey: ['company'],
  });

  return { isLoading, error, company };
}
