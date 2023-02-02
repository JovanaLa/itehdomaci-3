import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            BIOSKOPI
            <i class="fas fa-dom"></i>
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Početna
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/program'
                className='nav-links'>
                Repertoar
              </Link>
            </li>
            <li>
              <Link
                to='/reservations'
                className='nav-links'>
                Lokacije
              </Link>
            </li> 
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;