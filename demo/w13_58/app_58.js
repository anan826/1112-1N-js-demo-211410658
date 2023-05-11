const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// import {menu} from './data_58.js'
const url = './api/data.json'

let menu;
/*menu*/
const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) => {
        return `
        <article class="menu-item">
          <img src="${item.remote_img}" alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.descrip}
            </p>
          </div>
        </article>`
    });
    //console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    //console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
};

// window.addEventListener('DOMContentLoaded', () => {
//     displayMenuItems(menu);
// });

/*buttons*/
/*const category = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];*/
// console.log(category);

const displayMenuButtons = () => {
    const category = ['all', ...new Set(menu.map((item) => item.category))];
    let displayMenuButtons = category.map((btn) => {
        return `
        <button type="button" class="filter-btn" data-id="${btn}">${btn}</button>`
    });
    //console.log('displayMenuButtons before join', displayMenuButtons);
    displayMenuButtons = displayMenuButtons.join('');
    //console.log('displayMenuButtons after join', displayMenuButtons);
    btnContainer.innerHTML = displayMenuButtons;
    const filterBtns = document.querySelectorAll('.filter-btn');
      console.log('filter-btn', filterBtns);
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', (e) =>{
        console.log('data-id', e.currentTarget.dataset.id);
        const category = e.currentTarget.dataset.id;
        const filterMenu = menu.filter((item) => item.category === category);
        console.log('filterMenu', filterMenu);
        if (category === 'all'){
          console.log('all', menu)
          displayMenuItems(menu);
        }else{
          console.log(category, filterMenu);
          displayMenuItems(filterMenu);
        }
      });
    })
};

const fetchData = async () => {
  try{
    const response = await fetch(url);
    const data = response.json();
    console.log('response', response);
    console.log('data', data);
    return data;
  }catch(error){
    console.log(error);
  }
}

window.addEventListener('DOMContentLoaded', async () => {
    menu = await fetchData(url);
    await displayMenuItems(menu);
    await displayMenuButtons();
});
