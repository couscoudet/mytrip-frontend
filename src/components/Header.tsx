import { Button, Navbar } from 'flowbite-react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
      <Navbar fluid rounded>
      <Navbar.Brand href='#'>
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="My_trip Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/trips-list" className="hover:text-lime-700">Mes voyages</NavLink>
        <NavLink to="/my-account" className="hover:text-lime-700">Mon comptes</NavLink>
        <NavLink to="/admin" className="hover:text-lime-700">Administration</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header