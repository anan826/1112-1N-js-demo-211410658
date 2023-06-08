const search = document.querySelector('#search');
const submit = document.querySelector('#submit');
const random = document.querySelector('#random');
const resultHeading = document.querySelector('#result-heading');
const mealsElement = document.querySelector('#meals');
const singleMealElement = document.querySelector('#single-meal')


const searchMeal = (e) =>{
    e.preventDefault();
    const term = search.value;
    // console.log(term);
    if(term.trim()){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
        .then(response => response.json())
        .then(data =>{
            console.log("data", data);
            
            if(data.drinks === null){
                resultHeading.innerHTML = `<p>There are no search results. Please try again later${term}</p>`
            }else{
                resultHeading.innerHTML = `<h2>Search Results For ${term}</h2>`
                mealsElement.innerHTML = data.drinks.map((meal)=>{
                    return `
                        <div class="meal">
                            <img src="${meal.strDrinkThumb}" />
                            <div class="meal-info" data-mealID="${meal.idDrink}">
                            <h3>${meal.strDrink}</h3>
                            </div>
                        </div>
                        
                    `
                }).join('');
            }
        })

    }else{
        alert("Please enter a search term")
    }

}

const getMealById =(mealID) =>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(response=>response.json())
    .then(data=>{
        console.log('single drink', data)
        const meal = data.drinks[0]
        addMealToDOM(meal)
    })
}

const addMealToDOM = (drink)=>{
    const ingredients =[];
    for(let i =1;i<=20;i++){
        if(drink[`strIngredient${i}`]){
            ingredients.push(`${drink[`strIngredient${i}`]}-${drink[`strMeasure${i}`]}`);
        }else{
            break;
        }
    }
    console.log(`ingredients`, ingredients)

    singleMealElement.innerHTML =`
        <div class="single-meal">
            <h1>${drink.strDrink}</h1>
            <img src="${drink.strDrinkThumb}"/>
            <div class="main">
                <p>${drink.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul> ${ingredients.map(img =>
                    {
                        return `<li>${img}</li>`
                    }).join('')
                    }
                </ul>
            </div>
        
        </div>
        `
}

const getRandomMeal = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        console.log('random', data)
        const randomMeal = data.drinks[0];
        addMealToDOM(randomMeal);
      });
  };
  
//Event Listeners
submit.addEventListener('click', searchMeal);
mealsElement.addEventListener('click', e=>{
    console.log('e.path', e.composedPath());
    const composedPath = e.composedPath();
    const mealInfo = composedPath.find(item => {
        if(item.classList){
            return item.classList.contains('meal-info')
        }else{
            return false
        }
    })
    if(mealInfo){
        console.log('mealInfo', mealInfo)
        const mealID = mealInfo.getAttribute('data-mealID')
        getMealById(mealID);
    }
})

random.addEventListener('click', getRandomMeal);