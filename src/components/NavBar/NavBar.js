import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';
    
    const NavBar = () => {
        return (
          <nav>
            <Link to='/'>
              <h3>AluminioAAA</h3>
            </Link>
            <div className="Categories">
              <NavLink to={'/category/ventanas'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ventanas</NavLink>
              <NavLink to={'/category/perfiles'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Perfiles</NavLink>
              <NavLink to={'/category/otros'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>otros</NavLink>
            </div>
            <CartWidget />
          </nav>
        );
      };
      
      export default NavBar;
