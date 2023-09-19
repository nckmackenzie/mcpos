import { useToast } from '@/components/ui/use-toast';
import { createCompany as createCompanyApi } from '@/services/company-api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export function useCreateCompany() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { isLoading: isCreating, mutate: createCompany } = useMutation({
    mutationFn: createCompanyApi,
    onSuccess: data => {
      queryClient.invalidateQueries();
      queryClient.setQueryData(['company'], data);
      navigate('/');
      toast({
        title: 'Success',
        description: 'Company created successfully',
      });
    },
  });

  return { isCreating, createCompany };
}
