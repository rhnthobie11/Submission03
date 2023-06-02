import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate, createLikeRestaurantButtonTemplate } from '../template/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurants from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div id="resto" class="resto"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurants(url.id);
    const foods = await RestaurantSource.foodList();
    const beverages = await RestaurantSource.beverageList();
    const reviews = await RestaurantSource.customerReviews();
    // berperan untuk menampilkan data resto
    const restoDetail = document.querySelector('#resto');
    restoDetail.innerHTML = createRestoDetailTemplate(resto, foods, beverages, reviews);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurants,
      restaurant: resto,
    });
  },
};

export default Detail;
