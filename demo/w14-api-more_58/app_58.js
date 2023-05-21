const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const container = document.querySelector('.container')


//cocktail db
btn1.addEventListener('click', async () => {
  const url_cocktail = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  try {
    const response = await fetch(url_cocktail);
    const data = await response.json();
    console.log('data1', data.drinks);
    displayItems_cocktail(data.drinks);
  } catch (error) {
    console.error(error);
  }
});

const displayItems_cocktail = (items) => {
  const displayData = items
    .map((item) => {
      const { strDrink } = item;
      return `<p>${strDrink}</p>`;
    })
    .join('');
  // const element = document.createElement('div');
  const element = container
  element.innerHTML = displayData;
  // document.container.appendChild(element);
};
//meal db
btn2.addEventListener('click', async () => {
  const url_meal = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
  try {
    const response = await fetch(url_meal);
    const data = await response.json();
    console.log('data2', data);
    displayItems_meal(data.meals);
  } catch (error) {
    console.error(error);
  }
});

const displayItems_meal = (items) => {
  const displayData = items
    .map((item) => {
      const { strMeal } = item;
      return `<p>${strMeal}</p>`;
    })
    .join('');
  // const element = document.createElement('div');
  const element = container
  element.innerHTML = displayData;
  // document.body.appendChild(element);
};

//sport db
btn3.addEventListener('click', async () => {
  const url_sports = 'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php';
  try {
    const response = await fetch(url_sports);
    const data = await response.json();
    console.log('dat3', data.leagues);
    displayItems_sports(data.leagues);
  } catch (error) {
    console.error(error);
  }
});

const displayItems_sports = (items) => {
  const displayData = items
    .map((item) => {
      const { strLeague } = item;
      return `<p>${strLeague}</p>`;
    })
    .join('');
  // const element = document.createElement('div');
  const element = container
  element.innerHTML = displayData;
  // document.body.appendChild(element);
};

//audio db

btn4.addEventListener('click', async () => {
  const url_artist = 'https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay';
  try {
    const response = await fetch(url_artist);
    const data = await response.json();
    console.log('data4', data);
    displayItems_audio(data.artists);
  } catch (error) {
    console.error(error);
  }
});

const displayItems_audio = (items) => {
  const displayData = items
    .map((item) => {
      const { strArtist } = item;
      return `<p>${strArtist}</p>`;
    })
    .join('');
  // const element = document.createElement('div');
  const element = container
  element.innerHTML = displayData;
  // document.body.appendChild(element);
};

