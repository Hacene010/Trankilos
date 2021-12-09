import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Description, DishIntro, Menus } from '../../entities';
import Button from '../../ui/DishDetailsBtn/Button';
// eslint-disable-next-line import/no-cycle
import { DishDetails, LoginPage } from '..';

import SRouteCalls from './Style';

export default function RouteCalls() {
  const { id } = useSelector((state) => state.userReducer);
  const isLoggedIn = !!id;

  return (
    <SRouteCalls>
      <ToastContainer position="top-center" />

      <Header />
      {!isLoggedIn && (
        <Switch>
          <Route path="/login" component={LoginPage} />
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
    </SRouteCalls>
  );
}
