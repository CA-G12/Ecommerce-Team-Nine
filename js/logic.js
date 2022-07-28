//! Seller Start Here...
let itemsContainer = document.querySelector('.container');
let productName = document.querySelector('.productName');
let productPrice = document.querySelector('.productPrice');
let productImg = document.querySelector('.productImg');
let productDetails = document.querySelector('.productDetails');
let category = document.querySelector('.category');
let addItem = document.querySelector('.add-item');


let products = [
    {
        id: 1,
        productNames: 'iPhone 13 Pro',
        productPrice: '1000$',
        productImg: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg',
        productDescription: '8GB/256GB/1TB storage, no card slot',
        category: 'mobile',
    },

    {
        id: 2,
        productNames: 'iPhone 13',
        productPrice: '820$',
        productImg: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg',
        productDescription: '128GB/256GB/512GB storage, no card slot',
        category: 'mobile',
    },

    {
        id: 3,
        productNames: 'iPad 10.2 (2021)',
        productPrice: '1100$',
        productImg: 'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-102-2021-.jpg',
        productDescription: '64GB/256GB storage, no card slot',
        category: 'tablet',
    },

    {
        id: 4,
        productNames: 'Galaxy A73 5G',
        productPrice: '420$',
        productImg: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a73-5g.jpg',
        productDescription: '128GB/256GB storage, microSDXC',
        category: 'mobile',
    },

    {
        id: 5,
        productNames: 'Galaxy A33 5G',
        productPrice: '350$',
        productImg: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a33-5g.jpg',
        productDescription: '128GB/256GB storage, microSDXC, Android 12, One UI 4.1',
        category: 'mobile',
    },

    {
        id: 6,
        productNames: 'Galaxy S22 Ultra 5G',
        productPrice: '1150$',
        productImg: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg',
        productDescription: '128GB/256GB/1TB storage, no card slot',
        category: 'mobile',
    },

    {
        id: 7,
        productNames: 'Galaxy S22+ 5G',
        productPrice: '1100$',
        productImg: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-plus-5g.jpg',
        productDescription: '128GB/256GB storage, no card slot',
        category: 'mobile',
    },

    {
        id: 8,
        productNames: 'Galaxy Tab S8 Ultra',
        productPrice: '900$',
        productImg: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s8-ultra.jpg',
        productDescription: '128GB/256GB/512GB storage, microSDXC',
        category: 'tablet',
    },

    {
        id: 9,
        productNames: 'Galaxy S21 FE 5G',
        productPrice: '900$',
        productImg: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-fe-5g.jpg',
        productDescription: '128GB/256GB storage, no card slot',
        category: 'mobile',
    },

    {
        id: 10,
        productNames: 'Galaxy S21 Ultra 5G',
        productPrice: '1050$',
        productImg: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g-.jpg',
        productDescription: '128GB/256GB/512GB storage, no card slot',
        category: 'mobile',
    },
];

function addToProducts(e) {
    e.preventDefault();
    let item = createItem();
    creatElementDom(item)
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products))
}

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





