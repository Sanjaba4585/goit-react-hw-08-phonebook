import { useDispatch } from 'react-redux';
import css from './Loginform.module.css';
import { loginThunk } from '../../redux/auth/operations';
import { Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    // <div className={css.container}>
    //   <div className={css.loginForm}>
    //     <h1 className={css.title}>Login</h1>
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      action="#"
      className={css.form}
    >
      <Input type="text" placeholder="Enter your email" className={css.input} />
      <Input
        type="password"
        placeholder="Enter your password"
        className={css.input}
      />
      <Input type="button" value="Login" className={css.button} />
    </form>
    //   </div>
    // </div>
  );
};
