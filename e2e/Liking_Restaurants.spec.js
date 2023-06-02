Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.posts');
  I.see('Tidak ada restaurant untuk ditampilkan', 'h3');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', 'h3');

  I.amOnPage('/');

  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.post-item');
});
