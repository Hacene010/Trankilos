import SMain from './Style';
import { Description, DishIntro, Menus } from '../../entities';

export default function Main() {
  return (
    <SMain>
      <DishIntro />
      <Menus />
      <Description />
    </SMain>
  );
}
