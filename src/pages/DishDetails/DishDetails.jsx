import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import SDishDetails from './Style';

require('dotenv').config();

export default function DishDetails() {
  const [dish, setDish] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/dishes/${id}`)
      .then(({ data }) => {
        setDish(data[0]);
      })
      .catch((err) => {
        return `Oups ${err}`;
      });
  }, [id]);

  return (
    <SDishDetails>
      <article className="menus">
        <div className="title_img">
          <h2 className="mealName">{dish.name}</h2>

          <img src={dish.img} alt="dishImage" />
          <div className="infos">
            <h3>
              Catégorie:
              <span>{dish.category}</span>
            </h3>
            <div className="difficulties">
              <h3>Difficulté:</h3>
              <img src="/assets/img/difficulties.png" alt="difficulties" />
            </div>
            <div className="timer">
              <h3>Temps:</h3>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-c6GxNitctoN9PQsfoG2jJMknzSydwbDvkwXw9FSIq12d1wPM6e8eBZtwX-xOkss4cU&usqp=CAU"
                alt="timer"
              />
            </div>
            <h3>
              Origine: <span> {dish.area} </span>
            </h3>
          </div>
        </div>

        <div className="description">
          <h3>Instructions </h3>
          <p>{dish?.instructions}</p>
        </div>
      </article>
    </SDishDetails>
  );
}
