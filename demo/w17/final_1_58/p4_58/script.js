const main = document.querySelector('#main');
const addUserBtn = document.querySelector('#add-user');
const doubleBtn = document.querySelector('#double');
const showMillionairesBtn = document.querySelector('#showMillionaires');
const sortBtn = document.querySelector('#sort');
const calculateBtn = document.querySelector("#calculate-wealth");
function formatMoney(number) {

    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

}

let data = [];

const config = {
    numRandom: 5,
    ratio: 1.5,
    showCondition: 2000000
}

const updateDOM = (providedData = data) => {
    let tempData = providedData.map((item) => {
        return `<div class="person"><strong>${item.name}</strong> ${formatMoney(item.money)}</div>`
    });
    tempData = tempData.join('');
    console.log('tempData', tempData);
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2> ${tempData}`
}


const addData = (obj) => {
    data.push(obj);
    console.log('data', data);
    updateDOM();
}


const getRandomUser = async () => {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    console.log('random user data', data)
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 10000000)
    }
    addData(newUser);
}

const getUser = () => {
    for (let i = 0; i < config.numRandom; i++) {
        getRandomUser();
    }
}

getUser();

const changeBtnText = () => {
    addUserBtn.textContent = `Add Users (${config.numRandom}) 👱‍♂️`;
    doubleBtn.textContent = `Raise Money * ${config.ratio} 💰`;
}

changeBtnText();

const doubleMoney = () => {
    data = data.map((user) => {
        return {
            name: user.name,
            money: user.money * 2
        }
    });
    updateDOM();
}


const sortByRichest = () => {
    data.sort((a, b) => {
        return b.money - a.money
    });

    updateDOM();
}
let sum=0;

const calculateWealth = () => {
    for(let i=0;i<config.numRandom;i++){
      const wealth = data[i].money;
      parseInt(wealth);
      console.log('wealth',data[i].money);
      sum+=wealth;
      console.log(sum);
    }
    
    main.innerHTML += `<h3>Total Wealth: <strong>${formatMoney(sum)}</strong></h3>`
}

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
calculateBtn.addEventListener('click', calculateWealth);