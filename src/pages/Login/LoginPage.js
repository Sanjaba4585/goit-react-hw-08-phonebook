import { selectIsLoggeIn } from '../../redux/auth/authSelectors';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/Loginform';
import { useSelector } from 'react-redux';

export default function LoginPage() {
  const isloggedIn = useSelector(selectIsLoggeIn);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {!isloggedIn && <LoginForm />}
    </HelmetProvider>
  );
}
