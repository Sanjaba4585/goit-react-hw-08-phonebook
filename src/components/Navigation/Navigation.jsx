import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggeIn } from '../../redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggeIn);

  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </div>
    </nav>
  );
};
