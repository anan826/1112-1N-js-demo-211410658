import {menu} from './data_58.js'

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
/*menu*/
const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) => {
        return `
        <article class="menu-item">
          <img src="${item.img}" alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`
    });
    console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
};

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
});




/*buttons*/
const category = ['all', ...new Set(menu.map((item) => item.category))];
/*const category = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];*/
console.log(category);

const displayMenuButtons = () => {
    let displayMenuButtons = category.map((btn) => {
        return `
        <button type="button" class="filter-btn" data-id="${btn}">${btn}</button>`
    });
    console.log('displayMenuButtons before join', displayMenuButtons);
    displayMenuButtons = displayMenuButtons.join('');
    console.log('displayMenuButtons after join', displayMenuButtons);
    btnContainer.innerHTML = displayMenuButtons;
};

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons(category);
});
