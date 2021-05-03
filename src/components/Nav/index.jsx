import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SNav, SButton } from './style';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const alertSuccess = () => {
    toast.success('Yay! \\o/');
  };
  const alertFailure = () => {
    toast.error('Oh noez ! é_è');
  };
  return (
    <>
      <SNav className={isOpen && 'open'}>
        <nav>
          <h2>Welcome, Stranger !</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/parallax">Parallax</NavLink>
            </li>
            <li>
              <NavLink to="/qdfgkljdllgkqdg">404</NavLink>
            </li>
            <li>
              <NavLink to="/searchOne">SearchOne</NavLink>
            </li>
            <li>Search</li>
          </ul>
        </nav>
        <hr />
        <aside>
          <h3>Toasts</h3>
          <div>
            <button type="button" onClick={alertSuccess}>
              Toast!
            </button>
            <button type="button" onClick={alertFailure}>
              Error!
            </button>
          </div>
        </aside>
      </SNav>
      <SButton type="button" onClick={toggle}>
        <img src="/img/amarok.png" alt="" />
      </SButton>
    </>
  );
}
