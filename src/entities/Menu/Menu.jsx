import { useEffect, useState } from 'react';
import axios from 'axios';
import Dish from '../Dish/Dish';
import SMenus from './Style';

export default function Menus() {
  const [dishes, setDishes] = useState([]);
  const week = [
    'LUNDI',
    'MARDI',
    'MERCREDI',
    'JEUDI',
    'VENDREDI',
    'SAMEDI',
    'DIMANCHE',
  ];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/dishes`)
      .then(({ data }) => {
        setDishes(data);
      })
      .catch((err) => {
        return `something went wrong : ${err}`;
      });
  }, []);

  return (
    <SMenus className="center">
      {/* Mobile version */}
      <table className="mobile__version">
        {week.map((day) => {
          return (
            <tr key={day}>
              <th className="day">{day}</th>
              {dishes
                .map((dish) => {
                  return (
                    <div className="dishes">
                      <td>
                        <Dish key={dish.id} {...dish} />
                      </td>
                    </div>
                  );
                })
                .slice(0, 2)}
            </tr>
          );
        })}
      </table>

      {/* Desktop version */}

      <table className="descktop__version">
        <thead>
          <tr>
            <th>
              <p />
            </th>
            <td className="diner">
              <th>Déjeuner</th>
              <th>Dîner</th>
            </td>
          </tr>
        </thead>
        <tbody>
          {week.map((day) => {
            return (
              <tr key={day}>
                <th className="day">{day}</th>
                {dishes
                  .map((dish) => {
                    return (
                      <div className="row">
                        <tr>
                          <td>
                            <Dish key={dish.id} {...dish} />
                          </td>
                          <td>
                            <Dish key={dish.id} {...dish} />
                          </td>
                        </tr>
                      </div>
                    );
                  })
                  .splice(0, 2)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </SMenus>
  );
}
