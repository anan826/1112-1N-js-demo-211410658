const btnAll = document.querySelectorAll('.company-btn');
let data;

const fetchAPI = async ()=>{
    const url = `https://course-api.com/javascript-store-products`;
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log('data', data);
            return data;
        }catch(error){
            console.log(error)
        }
}

const displayItems = (data, textContent) => {
  data.then((item)=>
  {
    const dataDisplay = item.map((item)=>
      {
        const {company, price, name, image} = item.fields;
        // console.log(textContent, name);
        if (textContent == "all" || textContent == company)
        {
          return `
          <div class="single-product ${company}">
            <img
              src="${image[0].url}"
              class="single-product-img img"
              alt="${name}"
            />
            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">$${price}</span>
            </footer>
          </div>
          `;
        }
      }).join('');
      document.querySelector('.products-container').innerHTML = dataDisplay;
  });
    // const displayData = items
    //   .map((item) => {
    //     // const {price, image, name} = item;
    //     return `<div class="single-product ${item.fields.company} all">
    //     <img
    //       src="${item.fields.image[0].url}"
    //       class="single-product-img img"
    //       alt="${item.fields.name}"
    //     />
    //     <footer>
    //       <h5 class="name">${item.fields.name}</h5>
    //       <span class="price">$${item.fields.price}</span>
    //     </footer>
    //   </div>`;
    //   })
    //   .join('');
    // const element = document.createElement('div');
    // const element = container
    // document.querySelector('.products-container').innerHTML = displayData;
    // document.container.appendChild(element);
  };
  

window.addEventListener('DOMContentLoaded', ()=>
{
  data = fetchAPI();
  displayItems(data, "company");
});

btnAll.forEach((btn)=>
{
  btn.addEventListener('click',(e)=>
  {
    if(btn.textContent == 'all')
      displayItems(data);
    displayItems(data, btn.textContent);
  })
})

