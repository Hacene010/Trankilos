import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import SDishDetails from './Style';

export default function DishDetails() {
  const [dish, setDish] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5050/dishes/${id}`)
      .then(({ data }) => {
        setDish(...data);
      })
      .catch((err) => {
        return `Oups ${err}`;
      });
  }, [id]);
  console.log(id);
  return (
    <SDishDetails>
      <article className="menus">
        <div className="title_img">
          <h2 className="mealName">{dish.name}</h2>

          <img src={dish.img} alt="dishImage" />
          <div className="categoryArea">
            <h3>Catégorie:</h3>
            <li>{dish.category}</li>
            <h3>Origine:</h3>
            <li>{dish.area}</li>
          </div>
        </div>
        <div className="ingredients">
          <h3>Ingrédients :</h3>

          <li>ingrédient_1</li>
          <li>ingrédient_2</li>
          <li>ingrédient_3</li>
          <li>ingrédient_4</li>
          <li>ingrédient_5</li>
          <li>ingrédient_6</li>
          <li>ingrédient_7</li>
          <li>ingrédient_8</li>
          <li>ingrédient_9</li>
          <li>ingrédient_10</li>
        </div>
        <div className="description">
          <h3>Instructions :</h3>
          <p>{dish.instructions}</p>
        </div>
      </article>
    </SDishDetails>
  );
}
