//! Seller Start Here...
let itemsContainer = document.querySelector('.container');
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
    let item = createItem();
    creatElementDom(item)
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products))
}
// const addProduct =  (products, newProduct) => {
//     return [...products, newProduct]
// }
let i = 0;
function createItem() {
    let item = {
        id: i,
        productNames: productName.value,
        productPrice: productPrice.value,
        productImg: productImg.value,
        productDescription: productDetails.value,
        category: category.options[category.selectedIndex].value,
    }
    i++;
    return item;
}

function creatElementDom(item) {
    let card = document.createElement(`div`)
    card.classList.add(`card`);
    let imgDiv = document.createElement(`div`);
    let cardImg = document.createElement(`img`);
    card.appendChild(imgDiv.appendChild(cardImg));
    cardImg.src = item.productImg;
    let priceBtnTitleDiv = document.createElement(`div`);
    let priceTitleDiv = document.createElement(`div`);
    let h2 = document.createElement(`h2`)
    priceBtnTitleDiv.appendChild(priceTitleDiv);
    h2.textContent = item.productNames;
    card.appendChild(priceBtnTitleDiv);
    let para = document.createElement(`p`);
    para.textContent = item.productPrice;
    priceTitleDiv.appendChild(h2)
    priceTitleDiv.appendChild(para)
    priceBtnTitleDiv.appendChild(priceTitleDiv);
    let btn = document.createElement(`button`);
    btn.textContent = `Add to card`;
    priceBtnTitleDiv.appendChild(btn);
    itemsContainer.appendChild(card);
    card.appendChild(priceBtnTitleDiv);
    // let card = document.createElement('figure');
    // card.classList.add('seller-item')
    // let cardImg = document.createElement('img');
    // card.appendChild(cardImg);
    // cardImg.classList.add('productImg')
    // cardImg.setAttribute('src', item.productImg)
    // let cardName = document.createElement('h3');
    // itemsContainer.appendChild(card);
    // card.appendChild(cardName);
    // let productDescription = document.createElement('p');
    // productDescription.classList.add('productDescription');
    // card.appendChild(productDescription)
    // productDescription.textContent = item.productDescription;
    // cardName.textContent = item.productNames;
}

let addSectionBtn = document.querySelector('.addItemsSectionBtn');

let addForm = document.querySelector('.addItemsForm');

addSectionBtn.addEventListener('click', () => {
    addForm.style.display = 'flex';
})

let backTo = document.querySelector('.backToblack')

backTo.addEventListener('click', (e) => {
    e.preventDefault();
    addForm.style.display = 'none';

})

document.addEventListener('DOMContentLoaded', getTasksOnLoad)

function getTasksOnLoad() {
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'))
    }
    products.forEach(x => { creatElementDom(x) })
    // createProductLandingPage(product)

}
//! End of seller
