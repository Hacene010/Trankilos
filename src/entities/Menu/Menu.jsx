import Dish from '../Dish/Dish';
import SMenus from './Style';

export default function Menus() {
  return (
    <SMenus>
      <div className="container">
        <h3>Déjeuners</h3>
        <h3>Dîners</h3>
        <Dish />
      </div>
    </SMenus>
  );
}
