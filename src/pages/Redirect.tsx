import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Redirect() {
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <Card className={cn('max-w-lg bg-success', 'border-primary')}>
        <CardHeader className="space-y-4">
          <CardTitle>Signup Success! 🎊</CardTitle>
          <CardDescription>
            You account has successfully been created. Click on the link in the
            confirmation email sent to your mailbox. Check spam folder if email
            isn't in your inbox
          </CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
