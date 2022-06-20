const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 29.99,
    img: "./images/item-10.jpeg",
    desc: `It's a steak. <br> One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.`
  }
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
//let htmlButtons = "";
//const click = document.querySelector(".btn");

// Create menu categories based on the menu (prev array)
window.addEventListener("DOMContentLoaded", function() {
  // Display initial menu
  displayMenuItems(menu);

  // Display category buttons
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  // Create a new array from an existing menu array
  let menuArray = menuItems.map(function(item) {
    let codeStructure = 
    `<article class="menu-item ${item.category}">
    <img src="${item.img}" alt="${item.title}" class="photo">
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div></article>`;
    return codeStructure;
  });

  // Turn the array into a single string joined by
  // new line separators (separators aren't required)
  menuArray = menuArray.join("\n\n");

  // Insert the string in our "section-center" <div>
  // in the html
  sectionCenter.innerHTML = menuArray;  
}

function displayMenuButtons() {
  // Create an array of unique categories (from the menu array)
  const categories = menu.reduce(function(prev, curr) {
    //console.log(prev);
    if (!prev.includes(curr.category)) {
      prev.push(curr.category);
    }
    return prev;
  }, ["all"]);
  
  // Create buttons for the categories
  // -- Using forEach method (my initial dumb solution)
  // categories.forEach(function(categoryItem) {
  //   htmlButtons += `
  //   <button class="filter-btn" type="button">${categoryItem}</button>`;
  // });
  // -- Using map method (John Smilga)
  let buttonArray = categories.map(function(categoryItem) {
    return `<button class="filter-btn" type="button">${categoryItem}</button>`;
  });

  // Turn array of buttons code into a string
  let htmlButtons = buttonArray.join("\n");

  // Insert buttons into HTML code
  btnContainer.innerHTML = htmlButtons;
  
  // Select buttons ("btns" is now undefined if called
  // from outside this event because generated dynamically)
  const btns = btnContainer.querySelectorAll(".filter-btn");
  
  // Add event listener to each of the buttons 
  // with the logic from the "filteredMenu" 
  btns.forEach(function(item) {
    item.addEventListener("click", filteredMenu);
  });
}

// Filtering logic
// Filter the menu to show only the selected category
// This function is used as an event handler
// for the categories buttons (see "btns" above).
function filteredMenu(event) {
  let activeCategory = event.currentTarget.innerText;
  if (activeCategory.toLowerCase() !== "all") {
    let filtered = menu.filter(function(menuItem) {
      return menuItem.category === activeCategory.toLowerCase();
    });
    return displayMenuItems(filtered);    
  } else { 
    return displayMenuItems(menu);
  }
}