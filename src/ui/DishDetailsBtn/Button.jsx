import { NavLink } from 'react-router-dom';
import SButton from './Style';

export default function Button() {
  return (
    <SButton>
      <NavLink activeClassName="active" to="/dishes">
        <input type="button" value="Menus" />
      </NavLink>
      <NavLink to="/courses">
        <input type="button" value="Courses" />
      </NavLink>
    </SButton>
  );
}
