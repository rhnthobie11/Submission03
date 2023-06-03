import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../template/template-creator';

const Home = {
  async render() {
    return `
    <section id="content">
      <div class="newest">
       <h1 class="newest__label">Explore Eat & Go</h1>
        <div class="posts">

        </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restos = await RestaurantSource.restaurants();
    // berperan untuk menampilkan data resto
    const restoCard = document.querySelector('.posts');
    restos.forEach((resto) => {
      restoCard.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
