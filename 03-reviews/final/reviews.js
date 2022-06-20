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

const photo = document.querySelector(".photo")
const person = document.querySelector(".name")
const job = document.querySelector(".job")
const about = document.getElementById("about-txt")
const btns = document.querySelectorAll(".btns")
let currPerson = 0
let prevPerson = 0

document.addEventListener("DOMContentLoaded", loadPerson(currPerson))

function loadPerson(i) {
  photo.src = reviews[i].img
  person.textContent = reviews[i].name
  job.textContent = reviews[i].job
  about.textContent = reviews[i].text
}

btns.forEach(changePerson)

function changePerson(btn) {
  btn.addEventListener("click", function(){
    if (btn.classList.contains("next-btn")) {
      currPerson += 1
      if (currPerson > (reviews.length - 1)) 
        {currPerson = 0}
      loadPerson(currPerson)
    }
    if (btn.classList.contains("prev-btn")) {
      currPerson -= 1
      if (currPerson < 0) 
        {currPerson = (reviews.length - 1)}
      loadPerson(currPerson)
    }
    if (btn.classList.contains("random-btn")) {
      // currPerson = Math.floor(Math.random() * reviews.length)
      while (currPerson == prevPerson) {
        currPerson = Math.floor(Math.random() * reviews.length)
      }
      console.log(currPerson, prevPerson)
      loadPerson(currPerson)
      prevPerson = currPerson
    }
  })
}