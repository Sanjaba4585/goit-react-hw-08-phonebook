import { useSelector } from 'react-redux';
import { selectIsLoggeIn } from '../../redux/auth/authSelectors';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  const isLoggedIn = useSelector(selectIsLoggeIn);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      {!isLoggedIn && <RegisterForm />}
    </HelmetProvider>
  );
}
