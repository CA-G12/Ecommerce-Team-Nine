//! Seller Start Here...
let productName = document.querySelector('.productName');
let productPrice = document.querySelector('.productPrice');
let productImg = document.querySelector('.productImg');
let productDetails = document.querySelector('.productDetails');
let category = document.querySelector('.category');
let addItem = document.querySelector('.add-item');

addItem.addEventListener('click', addToProducts);

let products = [];

function addToProducts(e) {
    e.preventDefault();
    creatElementDom(createItem())
    products.push(createItem());
    localStorage.setItem('products', JSON.stringify(products))
}
// const addProduct =  (products, newProduct) => {
//     return [...products, newProduct]
// }
function createItem() {
    let i = 1;
    let item = {
        id: i,
        productName: productName.value,
        productPrice: productPrice.value,
        productImg: productImg.value,
        productDetails: productDetails.value,
        category: category.value,
    }
    i++;
    return item;
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

// products = JSON.parse(localStorage.getItem('products'))

//! End of seller
