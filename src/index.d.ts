type Currency = {
  code: string;
  name: string | null;
};

type Company = {
  address?: string | null;
  city?: string | null;
  companyName: string;
  contact: string;
  contactPerson: string;
  createdAt?: string | null;
  email: string;
  id?: string;
  postalCode?: string | null;
};
