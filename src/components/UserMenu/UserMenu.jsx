import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={css.div}>
      <p className={css.title}>{name}</p>
      <button className={css.button} onClick={handleLogOut}>Logout</button>
    </div>
  );
};
