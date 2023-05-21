const allBtn = document.querySelector('.all')
const ikeaBtn = document.querySelector('.ikea')
const marcosBtn = document.querySelector('.marcos')
const caressaBtn = document.querySelector('.caressa')
const liddyBtn = document.querySelector('.liddy')

const displayAPI = async ()=>{
    const url = `https://course-api.com/javascript-store-products`;
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log('data', data);
            displayItems(data);
        }catch(error){
            console.log(error)
        }
}

const displayItems = (items) => {
    const displayData = items
      .map((item) => {
        // const {price, image, name} = item;
        return `<div class="single-product ${item.fields.company} all">
        <img
          src="${item.fields.image[0].url}"
          class="single-product-img img"
          alt="${item.fields.name}"
        />
        <footer>
          <h5 class="name">${item.fields.name}</h5>
          <span class="price">$${item.fields.price}</span>
        </footer>
      </div>`;
      })
      .join('');
    // const element = document.createElement('div');
    // const element = container
    document.querySelector('.products-container').innerHTML = displayData;
    // document.container.appendChild(element);
  };
  

window.addEventListener('DOMContentLoaded', displayAPI);
allBtn.addEventListener('click', displayAPI);
