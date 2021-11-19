import {
  Nav, NavItem,
} from 'reactstrap';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const location = useLocation();
  const isLogin = useSelector((state) => state.loginData.isLogin);
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
      {isLogin && (
      <NavItem>
        <Link
          className={`${location.pathname === '/orders' ? 'linkActive' : 'link'}`}
          to="/orders"
        >
          Заказы
        </Link>
      </NavItem>
      )}
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
