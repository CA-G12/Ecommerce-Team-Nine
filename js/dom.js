//Function to create list item

let cart = []; 
localStorage.setItem('cart', JSON.stringify(cart));

const pageTitle = checkPage();
console.log(pageTitle)
if(pageTitle !== "cart.html"){
    renderProducts();
} else {
    cartRender();
}


function renderProducts() {
    let products = JSON.parse(localStorage.getItem('products'));
    products.forEach(item => {
        creatListElement(item)
    })
}

function cartRender(){
  let localCart = JSON.parse(localStorage.getItem('cart'));
  console.log(localCart);
   products.filter(item => {
    localCart.forEach(el => {
        if(item.id === el){
            creatListElement(item);
        }
    })
   });
}

function checkPage(){
    const thisPageLocation = window.location.href;
    let pageTitle = thisPageLocation.split("/")[4];
    return pageTitle;
}


//Sorting
document.getElementById('highestSort').addEventListener('click', sortHighest);
document.getElementById('lowestSort').addEventListener('click', sortLowest);



function sortHighest(){

    let product = document.getElementById('products');
    product.textContent = "";
    let h1 = document.createElement('h1');
    product.appendChild(h1);
    h1.textContent = "Highest Price";
    h1.classList.add("products-title")
    let products = JSON.parse(localStorage.getItem('products'));
    let sortedArr = products.sort((a,b) => (a.productPrice > b.productPrice) ? 1 : ((b.productPrice > a.productPrice) ? -1 : 0));
    localStorage.clear();
    localStorage.setItem('products', JSON.stringify(sortedArr));
    renderProducts();
}



function sortLowest(){
    let product = document.getElementById('products');
    product.textContent = "";
    let h1 = document.createElement('h1');
    product.appendChild(h1);
    h1.textContent = "Lowest Price";
    h1.classList.add("products-title")
    let products = JSON.parse(localStorage.getItem('products'));
    let sortedArr = products.sort((a,b) => (a.productPrice < b.productPrice) ? 1 : ((b.productPrice < a.productPrice) ? -1 : 0));
    localStorage.clear();
    localStorage.setItem('products', JSON.stringify(sortedArr));
    renderProducts();
}


function addItemsToCart(){
   
}

function creatListElement(item){
    console.log(item)
    let products = document.getElementById('products');

    let article = document.createElement('article');
    products.appendChild(article);
    article.classList.add('item'); 
 

    //Image Div
    let imageDiv = document.createElement('div');
    article.appendChild(imageDiv);
    imageDiv.classList.add('img-div');
    let image = document.createElement('img');
    imageDiv.appendChild(image);
    image.setAttribute('src', item.productImg);
    image.setAttribute('width', "200px" );
    image.setAttribute('height', "200px");

    let mainSection = document.createElement('section');
    article.appendChild(mainSection);
    mainSection.classList.add('products-info');

    let productName = document.createElement('div');
    mainSection.appendChild(productName);
    productName.classList.add('products-name');
    let proudctTitle = document.createElement('p');
    productName.appendChild(proudctTitle);
    proudctTitle.textContent = item.productName;
    productName.classList.add('product-title');
    let productDescirption = document.createElement('p');
    productName.appendChild(productDescirption);
    productDescirption.textContent = item.productDescription;

    let productPrice = document.createElement('div');
    mainSection.appendChild(productPrice);
    productPrice.classList.add('product-price');

    let productPriceText = document.createElement('p');
    productPrice.appendChild(productPriceText);
    productPriceText.textContent = item.productPrice;
    productPriceText.classList.add('product-price-title');

    let increaseQuantity = document.createElement('div');
    productPrice.appendChild(increaseQuantity);
    increaseQuantity.classList.add('increase-quantity');

    let addButton = document.createElement('button');
    increaseQuantity.appendChild(addButton);
    addButton.classList.add('add-to-cart');
    addButton.textContent = '+';
    let quantityText = document.createElement('p');
    increaseQuantity.appendChild(quantityText);
    
    quantityText.textContent = "1";
    

    let decressButton = document.createElement('button');
    increaseQuantity.appendChild(decressButton);
    decressButton.classList.add('add-to-cart'); 
    decressButton.textContent = '-';
    

    let addToCart = document.createElement('button');
    addToCart.textContent = "Add to Cart";
    addToCart.setAttribute('class', "addToCart");
    addToCart.setAttribute('value', item.id);

    addToCart.addEventListener('click', ()=>{
        if(cart.length === 0){
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            let newCart = localStorage.getItem('cart'); 
            newCart.push(item); 
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    })
    
    productPrice.appendChild(addToCart);
    addToCart.classList.add('view-more-btn');
    addToCart.setAttribute('src', item.productImg);
}




function creatElementDom(item) {
    let itemsContainer = document.querySelector('.Seller-items-container');
    let card = document.createElement('figure');
    card.classList.add('seller-item')
    let cardImg = document.createElement('img');
    card.appendChild(cardImg);
    cardImg.classList.add('productImg')
    cardImg.setAttribute('src', item.productImg)
    let cardName = document.createElement('h3');
    itemsContainer.appendChild(card);
    card.appendChild(cardName);
    let productDetails = document.createElement('p');
    productDetails.classList.add('productDetails');
    card.appendChild(productDetails)
    productDetails.textContent = item.productDetails;
    cardName.textContent = item.productName;
    console.log(category);


    productName.value = '';
    productPrice.value = '';
    productDetails.value = '';
    productImg.value = '';
}