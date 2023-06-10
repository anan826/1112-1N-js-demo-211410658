const search = document.querySelector('#search'); // 搜尋輸入框元素
const submit = document.querySelector('#submit'); // 搜尋按鈕元素
const random = document.querySelector('#random'); // 隨機按鈕元素
const resultHeading = document.querySelector('#result-heading'); // 搜尋結果標題元素
const mealsElement = document.querySelector('#meals'); // 餐點列表元素
const singleMealElement = document.querySelector('#single-meal'); // 單個餐點元素

/**
 * 搜尋餐點的函式
 * @param {Event} e - 事件對象
 */
const searchMeal = (e) =>{
    e.preventDefault(); // 阻止預設的表單提交行為
    const term = search.value; // 取得搜尋輸入的值
    if(term.trim()){ // 如果輸入值不是空白
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`) // 發送 HTTP 請求搜尋餐點
        .then(response => response.json()) // 解析回應為 JSON 格式
        .then(data =>{
            console.log("data", data);
            
            if(data.meals === null){ // 如果搜尋結果為空
                resultHeading.innerHTML = `<p>There are no search results. Please try again later${term}</p>`;
            }else{ // 如果有搜尋結果
                resultHeading.innerHTML = `<h2>Search Results For ${term}</h2>`;
                mealsElement.innerHTML = data.meals.map((meal)=>{
                    return `
                        <div class="meal">
                            <img src="${meal.strMealThumb}" />
                            <div class="meal-info" data-mealID="${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                            </div>
                        </div>
                    `;
                }).join('');
            }
        });

    }else{
        alert("Please enter a search term");
    }
};

/**
 * 透過餐點 ID 獲取餐點資料的函式
 * @param {string} mealID - 餐點 ID
 */
const getMealById =(mealID) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(response=>response.json())
    .then(data=>{
        console.log('single meal', data);
        const meal = data.meals[0];
        addMealToDOM(meal);
    });
};

/**
 * 將餐點資料加入網頁的函式
 * @param {Object} meal - 餐點物件
 */
const addMealToDOM = (meal)=>{
    const ingredients =[];
    for(let i =1;i<=20;i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]}-${meal[`strMeasure${i}`]}`);
        }else{
            break;
        }
    }
    console.log(`ingredients`, ingredients);

    singleMealElement.innerHTML =`
        <div class="single-meal">
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}"/>
            <div class="main">
                <p>${meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul> ${ingredients.map(ingredient =>
                    {
                        return `<li>${ingredient}</li>`;
                    }).join('')
                    }
                </ul>
            </div>
        </div>
    `;
};

/**
 * 取得隨機餐點的函式
 */
const getRandomMeal = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        console.log('random', data);
        const randomMeal = data.meals[0];
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
            return item.classList.contains('meal-info');
        }else{
            return false;
        }
    });
    if(mealInfo){
        console.log('mealInfo', mealInfo);
        const mealID = mealInfo.getAttribute('data-mealID');
        getMealById(mealID);
    }
});

random.addEventListener('click', getRandomMeal);
