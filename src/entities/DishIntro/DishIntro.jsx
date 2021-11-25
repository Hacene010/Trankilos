import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SDishIntro from './Style';

export default function DishIntro() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/dishes`).then(({ data }) => {
      setDishes(data);
    });
  }, []);
  return (
    <SDishIntro>
      <section className="container">
        {dishes
          .map((dish) => {
            return (
              <article className="menus" key={dish.id}>
                <div className="title_img">
                  <Link to={`/dishes/${dish.id}`}>
                    <h3>{dish.name}</h3>
                  </Link>
                  <img src={dish.img} alt="dishImage" />
                </div>
              </article>
            );
          })
          .slice(0, 4)}
      </section>

      <hr />
    </SDishIntro>
  );
}
