import { Loader2 } from 'lucide-react';

type ButtonLoaderProps = {
  loadingText: string;
};

export default function ButtonLoader({ loadingText }: ButtonLoaderProps) {
  return (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {loadingText || ' Please wait'}
    </>
  );
}
