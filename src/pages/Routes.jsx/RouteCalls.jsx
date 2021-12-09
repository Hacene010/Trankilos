import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Description, DishIntro, Menus } from '../../entities';
import Button from '../../ui/DishDetailsBtn/Button';
import DishDetails from '../DishDetails/DishDetails';
import Login from '../Login/Login';

import SMain from './Style';

export default function Main() {
  const { id } = useSelector((state) => state.userReducer);
  const isLoggedIn = !!id;

  return (
    <SMain>
      <ToastContainer position="top-center" />

      <Header />
      {!isLoggedIn && (
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      )}
      <DishIntro />
      {isLoggedIn && (
        <>
          <Button />
          <Switch>
            <Route exact path="/dishes" component={Menus} />
          </Switch>
        </>
      )}
      <Route path="/dishes/:id" component={DishDetails} />
      <Description />
    </SMain>
  );
}
