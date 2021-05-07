import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Screen from '..';
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
      {isOpen && <Screen onClick={toggle} />}
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
        <aside>
          <h3>Todo</h3>
          <ul>
            <li>Search</li>
            <li>Modals (need Redux/reducers)</li>
            <li>Gallery</li>
            <li>Drawings</li>
            <li>Private routes (need login)</li>
            <li>Login (need Redux/reducers)</li>
            <li>Form (react-hook-form ?)</li>
            <li>Accessibility</li>
            <li>API</li>
            <li>Code refactoring</li>
            <li>API centralization</li>
          </ul>
        </aside>
      </SNav>
      <SButton type="button" onClick={toggle}>
        <img src="/img/amarok.png" alt="" />
      </SButton>
    </>
  );
}
