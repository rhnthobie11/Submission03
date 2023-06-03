const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.posts');
  I.see('Tidak ada restaurant untuk ditampilkan', 'h3');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', 'h3');
  I.amOnPage('/');

  await I.waitForElement('.post-item__title a', 3);

  const firstResto = locate('.post-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  await I.waitForElement('#likeButton', 5);
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  await I.waitForVisible('.posts', 5);
  await I.seeElement('.posts');
  const likedRestoTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
