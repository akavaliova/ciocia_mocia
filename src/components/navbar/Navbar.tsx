import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.scss";

const Navbar = () => {

  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>ciocia_mocia</strong> natural desserts
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/desserts" className={({isActive}) => isActive ? activeLink : normalLink}>
                Desserts
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
