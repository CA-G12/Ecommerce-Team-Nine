//! Seller Start Here...


const products = [];

let item1 = {
    id: 1,
    productName: 'iPhone',
    productPrice: '$90',
    productImg: 'https://images.samsung.com/ps/smartphones/galaxy-s22/buy/SM-S901_GalaxyS22_Front_PhantomWhite_Thumbnail.png',
    productDescription: 'This is a phone',
    category: 'Phones',
}

let item2 = {
    id: 2,
    productName: 'Samsung',
    productPrice: '$1000',
    productImg: 'https://images.samsung.com/ps/smartphones/galaxy-s22/buy/SM-S901_GalaxyS22_Front_PhantomWhite_Thumbnail.png',
    productDescription: 'This is a phone',
    category: 'Phones',
}
products.push(item1);
products.push(item2);

localStorage.setItem('products', JSON.stringify(products));

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



// ================= OLD CODE ====================== //
// let productName = document.querySelector('.productName');
// let productPrice = document.querySelector('.productPrice');
// let productImg = document.querySelector('.productImg');
// let productDetails = document.querySelector('.productDetails');
// let category = document.querySelector('.category');
// let addItem = document.querySelector('.add-item');

// addItem.addEventListener('click', addToProducts);
// let i = 0;
// function createItem() {
//     let item = {
//         id: i,
//         productName: productName.value,
//         productPrice: productPrice.value,
//         productImg: productImg.value,
//         productDescription: productDetails.value,
//         category: category.options[category.selectedIndex].value,
//     }
//     i++;
//     return item;
// }

// function creatElementDom(item) {
//     let itemsContainer = document.querySelector('.Seller-items-container');
//     let card = document.createElement('figure');
//     card.classList.add('seller-item')
//     let cardImg = document.createElement('img');
//     card.appendChild(cardImg);
//     cardImg.classList.add('productImg')
//     cardImg.setAttribute('src', item.productImg)
//     let cardName = document.createElement('h3');
//     itemsContainer.appendChild(card);
//     card.appendChild(cardName);
//     let productDescription = document.createElement('p');
//     productDescription.classList.add('productDescription');
//     card.appendChild(productDescription)
//     productDescription.textContent = item.productDescription;
//     cardName.textContent = item.productName;
// }



// products = JSON.parse(localStorage.getItem('products'))
//! End of seller





