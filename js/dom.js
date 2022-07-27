//Function to create list item
function creatListElement(item){
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
    productDescirption.textContent = item.productDetails;

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
    

    let viewMoreButton = document.createElement('button');
    productPrice.appendChild(viewMoreButton);
    viewMoreButton.classList.add('view-more-btn');
    viewMoreButton.setAttribute('src', item.productImg);
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

function createProductLandingPage (products) {
    for(let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * 10);
        let container = document.querySelector(`#product-landing .contianer`);
        let card = document.createElement(`div`)
        card.classList.add(`card`);
        let imgDiv = document.createElement(`div`);
        let cardImg = document.createElement(`img`);
        card.appendChild(imgDiv.appendChild(cardImg));
        cardImg.src = products[random].img;
        cardImg.alt = products[random].title;
        let priceBtnTitleDiv = document.createElement(`div`);
        let priceTitleDiv = document.createElement(`div`);
        let h2 = document.createElement(`h2`)
        h2.textContent = products[random].title;
        let para = document.createElement(`p`);
        para.textContent = products[random].price;
        priceBtnTitleDiv.appendChild(priceTitleDiv.appendChild(h2, para));
        let btn = document.createElement(`button`);
        btn.textContent = `Add to card`;
        priceBtnTitleDiv.appendChild(btn);
        container.appendChild(card);
    }
}