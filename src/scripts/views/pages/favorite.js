import FavoriteRestaurants from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
          <div class="newest">
           <h1 class="newest__label">Favorites</h1>
           <h3 class="hidden-text">Tidak ada restaurant untuk ditampilkan</h3>
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

  // _renderError() {
  //   const mainContent = document.querySelector('#mainContent');
  //   const errorMessage = document.createElement('h3');
  //   errorMessage.innerText = 'Tidak ada restoran untuk ditampilkan';
  //   mainContent.append(errorMessage);
  // },
};

export default Favorite;
