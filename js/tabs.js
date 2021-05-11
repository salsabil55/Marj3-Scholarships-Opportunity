var ui = {
  tabs: document.querySelectorAll('.search-box__tabs li'),
  panels: document.querySelectorAll('.search-box__panel')
};

// set first tab active
ui.tabs[0].classList.add('is-active');
ui.panels[0].classList.add('is-active');

for (var i = 0; i < ui.tabs.length; i++) {
  ui.tabs[i].addEventListener('click', function(){
    if (!this.classList.contains('is-active')) {
      for (var j = 0; j < ui.tabs.length; j++) {
        ui.tabs[j].classList.remove('is-active');
      }
      this.classList.add('is-active');
      for (var j = 0; j < ui.panels.length; j++) {
        if (ui.panels[j].id === this.getAttribute('data-toggle')) {
          ui.panels[j].classList.add('is-active');
        } else {
          ui.panels[j].classList.remove('is-active');
        }
      }
    }
  });
}