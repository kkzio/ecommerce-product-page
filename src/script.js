// carousel
let slideIndex = 1;
showDivs(slideIndex);
const media = window.matchMedia("(max-width: 500px)");

function plusDivs(n) {
 showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("img-slide");
  const dots = document.getElementsByClassName("img-thumbnail");
  const some = document.querySelector('.modal-img .product-img');

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    media.matches ? slideIndex = x.length : slideIndex = x.length - 4;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("img-active", "");
  }

  x[slideIndex - 1].style.display = "block";

  if(slideIndex >= 5) {
    slideIndex = 1;
    x[slideIndex - 1].style.display = "block";
  }
  
  if (some !== null) {
    x[(slideIndex + 4) - 1].style.display = "block";
    dots[(slideIndex + 4) - 1].className += " img-active";
  }
  dots[slideIndex - 1].className += " img-active";
}

// show image on click
const contentImage = document.querySelector('.content-img');
const buttonClose = document.querySelector('.close');
const productImg = document.querySelector('.product-img').cloneNode(true);
const modalImg = document.querySelector('.modal-img');
const mobile = window.matchMedia("(max-width: 500px)")

contentImage.addEventListener('click', () => {
  if (!mobile.matches) {
    modalImg.appendChild(productImg);
    modalImg.style.display = "block";
  }
});

buttonClose.addEventListener('click', () => {
  modalImg.style.display = "none";
});

// increase & decrease quantity
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.reduce');
const item = document.querySelector('.item');
const addCart = document.querySelector('.add-cart');
const cartBadge = document.querySelector('.cart-badge');
let quantity = 0;
let currentQuantity = 0;

increase.addEventListener('click', () => {
  quantity++;
  item.setAttribute('value', quantity);
});

decrease.addEventListener('click', () => {
  if (item.value > 0){
    quantity--;
    item.setAttribute('value', quantity);
  }
});

addCart.addEventListener('click', () => {
  currentQuantity = currentQuantity + quantity;
  if(currentQuantity > 0) {
    cartBadge.style = 'display: flex';
    cartBadge.innerHTML = currentQuantity;
  }
});

// cart
const cart = document.querySelector('.cart');
const cartContainer = document.querySelector('.cart-container');
const quantityProduct = document.querySelector('.quantity-product');
const total = document.querySelector('.total');
const emptyCart = document.querySelector('.empty-cart');
const checkCart = document.querySelector('.check-cart');
const deleteCart = document.querySelector('.delete-cart');

let totalPrice = 0;

cart.addEventListener('click', () => {
  cartContainer.classList.toggle('active');

  if(currentQuantity === 0) {
    emptyCart.style = 'display: block';
    checkCart.style = 'display: none';
  } else {
    emptyCart.style = 'display: none';
    checkCart.style = 'display: block';
  }

  quantityProduct.innerHTML = currentQuantity;
  totalPrice = currentQuantity * 125;
  total.innerHTML = ` $${totalPrice.toFixed(2)}`;
});

deleteCart.addEventListener('click', () => window.location.reload());

// mobile
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const closeMenu = document.querySelector('.close-menu');

menu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
})
