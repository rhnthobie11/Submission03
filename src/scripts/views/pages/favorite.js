import FavoriteRestaurants from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
          <div class="newest">
           <h1 class="newest__label">Favorites</h1>
           <h3></h3>
            <div class="posts" id="tes">
    
            </div>
          </div>
        `;
  },

  async afterRender() {
    const restos = await FavoriteRestaurants.getAllRestaurants();
    const restoContainer = document.querySelector('.posts');

    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
