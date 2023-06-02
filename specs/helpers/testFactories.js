import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurants from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurants,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
