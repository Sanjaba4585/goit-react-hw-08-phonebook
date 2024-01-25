import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';
import { Button, Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      registerThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    // <div className={css.container}>
    //   <h1 className={css.title}>Registration</h1>
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <label>
        Username
        <Input
          type="text"
          name="name"
          size={'sm'}
          width={'300px'}
          borderColor={'#56bd77'}
        />
      </label>
      <label>
        Email
        <Input
          type="email"
          name="email"
          size={'sm'}
          width={'300px'}
          borderColor={'#56bd77'}
        />
      </label>
      <label>
        Password
        <Input
          type="password"
          name="password"
          size={'sm'}
          width={'300px'}
          borderColor={'#56bd77'}
        />
      </label>
      <Button type="submit" size={'sm'}>
        Register
      </Button>
    </form>
    // </div>
  );
};

// return (
//   <div className={css.container}>
//     <h1 className={css.title}>Registration</h1>
//     <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
//       <input className={css.input} type="text" placeholder="Enter your name" />
//       <input className={css.input} type="text" placeholder="Enter your email" />
//       <input className={css.input} type="text" placeholder="password" />
//       <Button type="submit" size={'sm'} className={css.button}>
//         Register
//       </Button>
//     </form>
//   </div>
// );
