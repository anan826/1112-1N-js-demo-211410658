const url = `./api/products.json`;

const productContainer = document.querySelector('.products-container')
const companyBtns = document.querySelectorAll('.company-btn')
let allProducts;
let products;

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
    let displayContent = products.map((product, index)=>{
        const {company, name, price} =product.fields;
        let image = `./images/product-${index+1}.jpg`
        return `
        <div class="single-product">
              <img
                src="${image}"
                class="single-product-img img"
                alt="${name}"
              />
              <footer>
                <h5 class="name">${name}</h5>
                <span class="price">$${price/100}</span>
              </footer>
            </div>
        `
    }).join('')
    // console.log('displayContent', displayContent);
    productContainer.innerHTML = displayContent;
}
companyBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const companyID = e.currentTarget.dataset.id;
        console.log('company', companyID)
        if(companyID === 'all'){
            console.log(`all products`, allProducts)
            displayProducts(allProducts);
            
        }else{
            products = allProducts.filter((p)=>p.fields.company === companyID);
            console.log(`${companyID} products`, products)
            displayProducts(products)
        }
    })
})


window.addEventListener('DOMContentLoaded', async()=>{
    allProducts = await fetchData();
    console.log('all products', allProducts);
    await displayProducts(allProducts);

})

