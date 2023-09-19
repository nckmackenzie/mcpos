import { Alert, AlertDescription, AlertTitle } from './alert';

type CustomAlertProps = {
  variant?: 'default' | 'destructive' | null | undefined;
  title?: string;
  message: string;
};

export default function CustomAlert({
  variant,
  title,
  message,
}: CustomAlertProps) {
  return (
    <Alert variant={variant}>
      {/* <AlertCircle className="h-4 w-4" /> */}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
