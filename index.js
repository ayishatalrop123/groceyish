const productsData = [
  {
    id : 1,
    image: "images/radish.jpg",
    category: "Vegetables",
    title: "radish",
    gram: "radish 500g",
    star : "images/star.svg",
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 2,
    image: "images/potato.jpg",
    category: "Vegetables",
    title: "potato",
    gram: "potato 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 3,
    image: "images/tomato.jpg",
    category: "Fruits",
    title: "tomato",
    gram: "tomato 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 4,
    image: "images/broccoli.jpg",
    category: "Vegetables",
    title: "broccoli",
    gram: "broccoli 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 5,
    image: "images/peas.jpg",
    category: "Vegetables",
    title: "green peas",
    gram: "peas 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 6,
    image: "images/onion.jpg",
    category: "Vegetables",
    title: "onion",
    gram: "onion 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 7,
    image: "images/orange.jpg",
    category: "Fruits",
    title: "oranges",
    gram: "orange 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 8,
    image: "images/leaf.jpg",
    category: "Leaves",
    title: "curry leaf",
    gram: "leaf 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 9,
    image: "images/strawberry.jpg",
    category: "Fruits",
    title: "strawberry",
    gram: "strawberry 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 10,
    image: "images/peach.jpg",
    category: "Fruits",
    title: "peach",
    gram: " peach 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 11,
    image: "images/apple.jpg",
    category: "Fruits",
    title: "apple",
    gram: "apple 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 12,
    image: "images/carrot.jpg",
    category: "vegetables",
    title: "carrot",
    gram: "carrot 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  {
    id : 13,
    image: "images/leaf.jpg",
    category: "Leaves",
    title: "spinach",
    gram: "spinach 500g",
    star : "images/star.svg", 
    Mcfood: "By Mcfood",
    green: "$2",
    del: "$3.99",
    cart2: "images/shopping-cart.svg",
    add: "Add"
  },
  
];


const productContainer = document.querySelector('.cards');
const dropdownItems = document.querySelectorAll('.dropdown-list-item');
const searchInput = document.querySelector("[data-search]");

let currentCategory = 'All';

// Display all products on page load
window.addEventListener('DOMContentLoaded', () => {
  displayProductsData(productsData);
});

// Handle dropdown selection
dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    currentCategory = e.target.dataset.id;
    filterAndDisplayProducts();
    document.getElementById('span').innerText = e.target.innerText;
    document.getElementById('list').classList.remove('show');
  });
});

// Handle search input
searchInput.addEventListener('input', () => {
  filterAndDisplayProducts();
});

// Filter and display products based on category and search input
function filterAndDisplayProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = productsData.filter(product => {
    const matchesCategory = currentCategory === 'All' || product.category.toLowerCase() === currentCategory.toLowerCase();
    const matchesSearch = product.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
  displayProductsData(filteredProducts);
}

// Display products data
function displayProductsData(productz) {
  const displayData = productz.map(cat_items => `
    <li class="products">
      <div class="image">
        <img src="${cat_items.image}" alt="img1">
      </div>
      <div class="content">
        <h6 class="title">${cat_items.title}</h6>
        <h4 class="gram">${cat_items.gram}</h4>
        <span class="starcontainer">
          <img src="${cat_items.star}" alt="star">
        </span>
        <h6 class="mcfood">${cat_items.Mcfood}</h6>
      </div>
      <div class="price">
        <h5 class="green">${cat_items.green}<del class="del">${cat_items.del}</del></h5>
        <a class="button" href="#">
          <img class="cart2" src="${cat_items.cart2}" alt="cart-2">
          <h5 class="add">${cat_items.add}</h5>
        </a>
      </div>
    </li>
  `).join("");
  productContainer.innerHTML = displayData;
}

const arrow = document.querySelector('.arrow');
const list = document.getElementById("list");
const span = document.getElementById("span");
const listItems = document.querySelectorAll(".dropdown-list-item");

arrow.addEventListener("click", function () {
  list.classList.toggle('show');
});
for (let item of listItems) {
  item.onclick = function (e) {
    span.innerText = e.target.innerText;
  };
}




