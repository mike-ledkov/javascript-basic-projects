// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting item
let currItem = 0;

// Setting up the default value for the random person
let prevRnd = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function() {
  loadPerson(currItem);
});

// Function to show the selected person
function loadPerson(number) {
  const item = reviews[currItem];
  author.textContent = item.name;
  job.textContent = item.job;
  img.src = item.img;
  info.textContent = item.text;
};

// Select buttons
prevBtn.addEventListener("click", changePerson);
nextBtn.addEventListener("click", changePerson);
randomBtn.addEventListener("click", changePerson);

// function to process the click of a certain button
function changePerson(item) {

  // Assign the class list of a clicked button to a variable in
  // order to select a correct button later on
  let btn = item.currentTarget.classList;

  // Assign the length of our (array - 1) to a var for convenience
  let max = reviews.length - 1;

  // Check what button is pressed
  if (btn.contains("prev-btn")) {
    currItem--;

    // If we continue to click the _previous_ button when the FIRST
    // array item is reached, go to the LAST item of the array
    // (to make an illusion of the cycle)
    if (currItem < 0) {
      currItem = max;
    }
  } else if (btn.contains("next-btn")) {
    currItem++;
    // If we continue to click the _next_ button when the LAST
    // array item is reached, go to the FIRST item of the array
    // (to make an illusion of the cycle)
    if (currItem > max) {
      currItem = 0;
    }
  } else if (btn.contains("random-btn")) {
    // Below is the cool function to prevent random numbers
    // occur twice in a row.
    // I've looked it up from the guy named Onder in the lection 107
    // comments.
    // We check if the previous random number equals to the current 
    // number. If it is, then we generate the new random number
    // (until it is not equal to the previous one).
    while (prevRnd == currItem) {
      currItem = Math.round(Math.random() * max);
    }
    // We update the value of the previous random number.
    prevRnd = currItem;
  }
  // Show the selected person from an array
  loadPerson(currItem);
}