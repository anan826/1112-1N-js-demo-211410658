const url = `https://course-api.com/javascript-store-products`;

const productContainer = document.querySelector('.products-container')
let allProducts;
let product;

const fetchData = async () =>{
    try{
        const response = await fetch(url);
        const data = response.json();
        console.log('fetch', data);
        return data;
    }catch (error){
        console.log(error);
    }

}

const  displayProducts = (products) =>{
    let displayContent = products.map((product)=>{
        const {company, name, price, image} =product.fields;
        return `
        <div class="single-product">
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
        `
    }).join('')
    console.log('displayContent', displayContent);
    productContainer.innerHTML = displayContent;
}



window.addEventListener('DOMContentLoaded', async()=>{
    allProducts = await fetchData();
    console.log('all products', allProducts);
    await displayProducts(allProducts);

})