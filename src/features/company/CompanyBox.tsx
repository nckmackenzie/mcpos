import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CompanyForm from './CompanyForm';

export default function CompanyBox() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg lg:text-2xl">
            Define Company Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CompanyForm />
        </CardContent>
      </Card>
    </div>
  );
}
