import { Switch, Route } from 'react-router-dom';
import { Description, DishIntro, Menus } from '../../entities';
import Button from '../../ui/DishDetailsBtn/Button';
import DishDetails from '../DishDetails/DishDetails';
import SMain from './Style';

export default function Main() {
  return (
    <SMain>
      <DishIntro />
      <Button />
      <Switch>
        <Route exact path="/dishes" component={Menus} />
        <Route path="/dishes/:id" component={DishDetails} />
      </Switch>
      <Description />
    </SMain>
  );
}
