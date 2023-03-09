const menu = [
    {
        id: 1,
        title: 'McDonald\'s',
        category: 'breakfast',
        price: 11.59,
        img: './images/my-1.jpg',
        remote_img: 'https://slyliryvslfzxeqslixp.supabase.co/storage/v1/object/public/demo-58/md_1N_img/my-1.jpg',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi illo velit odit ipsa distinctio, quos provident aliquam dolore rem voluptatibus, dolores suscipit reprehenderit optio? Harum sed dolorem error voluptas fugit.'
    },
    {
        id: 2,
        title: 'Italy',
        category: 'lunch',
        price: 15.59,
        img: './images/my-2.jpg',
        remote_img: 'https://slyliryvslfzxeqslixp.supabase.co/storage/v1/object/public/demo-58/md_1N_img/my-2.jpg',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi illo velit odit ipsa distinctio, quos provident aliquam dolore rem voluptatibus, dolores suscipit reprehenderit optio? Harum sed dolorem error voluptas fugit.'
    },
    {
        id: 3,
        title: 'dinner double',
        category: 'dinner',
        price: 18.59,
        img: './images/my-3.jpg',
        remote_img: 'https://slyliryvslfzxeqslixp.supabase.co/storage/v1/object/public/demo-58/md_1N_img/my-3.jpg',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi illo velit odit ipsa distinctio, quos provident aliquam dolore rem voluptatibus, dolores suscipit reprehenderit optio? Harum sed dolorem error voluptas fugit.'
    },
    {
        id: 4,
        title: 'salad',
        category: 'dinner',
        price: 14.59,
        img: './images/my-4.jpg',
        remote_img: 'https://slyliryvslfzxeqslixp.supabase.co/storage/v1/object/public/demo-58/md_1N_img/my-4.jpg',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi illo velit odit ipsa distinctio, quos provident aliquam dolore rem voluptatibus, dolores suscipit reprehenderit optio? Harum sed dolorem error voluptas fugit.'
    }
];

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