const DrawerInitiator = {
  init({
    button, drawer,
    // button, drawer, content, main,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
