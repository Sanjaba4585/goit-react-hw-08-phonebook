import { useDispatch, useSelector } from 'react-redux';
import css from './NavBar.module.css';
import { selectLoggedIn, selectUser } from '../../redux/auth/authSelectors';
import { Link } from 'react-router-dom';
import { logoutThunk } from '../../redux/auth/operations';

export const NavBar = () => {
  const dispatch = useDispatch();
  const isloggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div className={css.body}>
      {isloggedIn && (
        <Link to="/contacts" className="">
          Contacts
        </Link>
      )}
      {!isloggedIn && (
        <ul className={css.Navlinks}>
          <li>
            <Link to="/login" className={css.link}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className={css.link}>
              Register
            </Link>
          </li>
        </ul>
      )}

      {isloggedIn && <h1 className="">Hello {user.name}</h1>}
      <div className="">
        {isloggedIn && (
          <button onClick={() => dispatch(logoutThunk())} className="">
            Exit
          </button>
        )}
      </div>
    </div>
  );
};
