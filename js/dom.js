

function creatListElement(item){
    
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