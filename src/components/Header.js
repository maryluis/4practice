import {
  Nav, NavItem,
} from 'reactstrap';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <Nav className="header p-2 px-3" tabs>
      <NavItem>
        <Link
          className={`${location.pathname === '/welcome' ? 'linkActive' : 'link'}`}
          to="/welcome"
        >
          Приветствие
        </Link>
      </NavItem>
      <NavItem>
        <Link
          className={`${location.pathname === '/orders' ? 'linkActive' : 'link'}`}
          to="/orders"
        >
          Заказы
        </Link>
      </NavItem>
      <NavItem>
        <Link
          className={`${location.pathname === '/create' ? 'linkActive' : 'link'}`}
          to="/create"
        >
          Создать заказ
        </Link>
      </NavItem>
    </Nav>
  );
}
export default Header;
