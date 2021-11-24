import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SDish from './Style';

export default function Dish({ id, name, img, category, area }) {
  return (
    <SDish>
      <article className="menus">
        <div className="title_img">
          <Link to={`/dishes/${id}`}>
            <h3 className="mealName">{name}</h3>
          </Link>
          <img src={img} alt="dishImage" />
        </div>
        <div className="infos">
          <p>
            Catégorie:
            <span>{category}</span>
          </p>
          <div className="difficulties">
            <p>Difficulté</p>
            <img
              src="https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180822513/108884068-levels-vector-icon-isolated-on-transparent-background-levels-logo-concept.jpg"
              alt="difficulties"
            />
          </div>
          <div className="timer">
            <p>Temps:</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-c6GxNitctoN9PQsfoG2jJMknzSydwbDvkwXw9FSIq12d1wPM6e8eBZtwX-xOkss4cU&usqp=CAU"
              alt="timer"
            />
          </div>
          <p>
            Origine: <span> {area} </span>
          </p>
        </div>
      </article>
    </SDish>
  );
}

Dish.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};
