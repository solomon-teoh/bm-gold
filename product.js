let openShopping = document.querySelector('.shopping');
let closeshopping = document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listcart = document.querySelector('.listcart');
let main = document.querySelector('main');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    main.classList.add('active');
})

closeshopping.addEventListener('click', ()=>{
    main.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Black Pearl Durian',
        image: 'blackpearl.jpg',
        price: 80
    },
    {
        id: 2,
        name: 'Musang King Durian',
        image: 'musangking.jpg',
        price: 75
    },
    {
        id: 3,
        name: 'J.Sparrow Durian',
        image: 'sparrow.jpg',
        price: 65
    },
    {
        id: 4,
        name: 'Red Prawn Durian',
        image: 'redprawn.jpg',
        price: 70
    },
    {
        id: 5,
        name: 'Green Skin Durian',
        image: 'greenskin.jpg',
        price: 70
    },
    {
        id: 6,
        name: 'Golden Pheonix',
        image: 'goldenpheonix.jpg',
        price: 50
    },
];

let listCarts = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
})
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        listCarts[key] = products[key];
        listCarts[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart(){
    listcart.innerHTML = ''; 
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div> 
            <div>${value.price.toLocaleString()}</div>
            <div>
            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
            listcart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}


