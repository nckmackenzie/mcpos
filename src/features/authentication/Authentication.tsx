import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useSearchParams } from 'react-router-dom';
import AuthForm from './AuthForm';
import RegisterForm from './RegisterForm';

export default function Authentication() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin =
    !searchParams.get('type') || searchParams.get('type') === 'login'
      ? true
      : false;

  function handleToggleAuthMode() {
    if (isLogin) {
      searchParams.set('type', 'register');
    } else {
      searchParams.set('type', 'login');
    }
    setSearchParams(searchParams);
  }

  return (
    <main className="min-h-dvh flex items-center justify-center px-4 md:px-0">
      <Card className="max-w-lg mx-auto w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-lg md:text-2xl lg:text-4xl">
            {isLogin ? 'Welcome back' : 'Create an account with us'}
          </CardTitle>
          <CardDescription className="text-sm md:text-base lg:text-lg">
            {isLogin
              ? 'We are happy to help your business grow'
              : 'The next big step for your company starts here'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLogin ? (
            <AuthForm onToggleAuthMode={handleToggleAuthMode} />
          ) : (
            <RegisterForm onToggleAuthMode={handleToggleAuthMode} />
          )}
        </CardContent>
      </Card>
    </main>
  );
}
