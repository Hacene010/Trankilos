import axios from 'axios';
import { useEffect } from 'react';
import SDishIntro from './Style';

const dishes = [
  {
    title: 'plat 1',
    picture:
      'https://thumbs.dreamstime.com/b/west-african-food-assortment-west-african-food-concept-traditional-wset-african-dishes-assortment-peanut-soup-jollof-rice-grilled-136692172.jpg',
  },
  {
    title: 'plat 2',
    picture:
      'https://thumbs.dreamstime.com/b/collection-take-away-foil-boxes-healthy-food-set-containers-meals-top-view-free-copy-space-164637874.jpg',
  },
  {
    title: 'plat 3',
    picture:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    title: 'plat 4',
    picture:
      'https://img.delicious.com.au/bYM-hxFc/del/2017/07/gluten-free-eggplant-parmigiana-lasagne-48860-2.jpg',
  },
  {
    title: 'plat 5',
    picture:
      'https://img.delicious.com.au/bYM-hxFc/del/2017/07/gluten-free-eggplant-parmigiana-lasagne-48860-2.jpg',
  },
  {
    title: 'plat 6',
    picture:
      'https://glutenfreecuppatea.co.uk/wp-content/uploads/2017/09/gluten-free-sweet-and-sour-recipe-featured.jpg',
  },
];

export default function DishIntro() {
  useEffect(() => {
    axios.get(dishes).then(({ data }) => {
      dishes(data);
    });
  }, []);
  return (
    <SDishIntro>
      <section className="container">
        {dishes.map((dish) => {
          return (
            <article className="menus">
              <div className="title_img">
                <h3>{dish.title}</h3>
                <img src={dish.picture} alt="dishImage" />
              </div>
            </article>
          );
        })}
        <article className="menus">
          <div className="title_img">
            <h3>{dishes.title}</h3>
            <img src={dishes.image} alt="" />
          </div>
        </article>
      </section>

      <hr />
    </SDishIntro>
  );
}
