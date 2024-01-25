import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
