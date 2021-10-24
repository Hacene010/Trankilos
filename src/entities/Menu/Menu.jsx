import Dish from '../Dish/Dish';
import SMenus from './Style';

export default function Menus() {
  return (
    <SMenus className="center">
      {/* Mobile version */}
      <table className="mobile__version">
        <tr>
          <th className="day">
            <aside>
              {' '}
              L<br />U<br />N<br />D<br />I
            </aside>
          </th>
          <td>
            <tr>
              <Dish />
            </tr>
            <tr>
              <Dish />
            </tr>
          </td>
        </tr>
        <tr>
          <th className="day">
            <aside>
              {' '}
              M<br />A<br />R<br />D<br />I
            </aside>
          </th>
          <td>
            <tr>
              <Dish />
            </tr>
            <tr>
              <Dish />
            </tr>
          </td>
        </tr>
        <tr>
          <th className="day">
            <aside>
              {' '}
              M<br />E<br />R<br />C<br />R<br />E<br />D<br />I
            </aside>
          </th>
          <td>
            <tr>
              <Dish />
            </tr>
            <tr>
              <Dish />
            </tr>
          </td>
        </tr>
        <tr>
          <th className="day">
            <aside>
              {' '}
              J<br />E<br />U<br />D<br />I
            </aside>
          </th>
          <td>
            <tr>
              <Dish />
            </tr>
            <tr>
              <Dish />
            </tr>
          </td>
        </tr>
        <tr>
          <th className="day">
            <aside>
              {' '}
              V<br />E<br />N<br />D<br />R<br />E<br />D<br />I
            </aside>
          </th>
          <td>
            <tr>
              <Dish />
            </tr>
            <tr>
              <Dish />
            </tr>
          </td>
        </tr>
        <tr>
          <th className="day">
            <aside>
              {' '}
              S<br />A<br />M
              <br />E<br />D<br />I
            </aside>
          </th>
          <td>
            <tr>
              <Dish />
            </tr>
            <tr>
              <Dish />
            </tr>
          </td>
        </tr>
        <tr>
          <th className="day">
            <aside>
              {' '}
              D<br />I<br />M<br />A<br />N<br />C<br />H<br />E
            </aside>
          </th>
          <td>
            <tr>
              <Dish />
            </tr>
            <tr>
              <Dish />
            </tr>
          </td>
        </tr>
      </table>

      {/* Desktop version */}

      <table className="descktop__version">
        <tr>
          <th>
            <p />
          </th>
          <th>
            <h2>Déjeuner</h2>
          </th>
          <th>
            <h2>Dîner</h2>
          </th>
        </tr>
        <tr>
          <th className="day">Lundi</th>
          <td>
            <Dish />
          </td>
          <td>
            <Dish />
          </td>
        </tr>
        <tr>
          <th className="day">Mardi</th>
          <td>
            <Dish />
          </td>
          <td>
            <Dish />
          </td>
        </tr>
        <tr>
          <th className="day">Mercredi</th>
          <td>
            <Dish />
          </td>
          <td>
            <Dish />
          </td>
        </tr>
        <tr>
          <th className="day">Jeudi</th>
          <td>
            <Dish />
          </td>
          <td>
            <Dish />
          </td>
        </tr>
        <tr>
          <th className="day">Vendredi</th>
          <td>
            <Dish />
          </td>
          <td>
            <Dish />
          </td>
        </tr>
        <tr>
          <th className="day">Samedi</th>
          <td>
            <Dish />
          </td>
          <td>
            <Dish />
          </td>
        </tr>
        <tr>
          <th className="day">Dimanche</th>
          <td>
            <Dish />
          </td>
          <td>
            <Dish />
          </td>
        </tr>
      </table>
    </SMenus>
  );
}
