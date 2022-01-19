// Element.getBoundingClientRect() method — returns the size of an element and its position relative to the viewport.
// (pageYOffset) scrollY — read-only window property that returns the number of pixels the document has been scrolled vertically.
// slice — extracts a section of a string without modifying original string
// offsetTop — a number, representing the top position of the element, in pixels

// ********** set date ************
const copyrightYear = document.getElementById("date");
copyrightYear.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
  // static sizing
  // linksContainer.classList.toggle("show-links");
  
  const linksHeight = links.getBoundingClientRect().height;
  let containerHeight = linksContainer.getBoundingClientRect().height;
  // dynamic links container sizing
  if (containerHeight == 0) {
    linksContainer.style.height = linksHeight + "px";
  } else {
    linksContainer.style.height = 0;
  }

  // ANOTHER WAY IS TO USE MAX-HEIGHT INSTEAD OF HEIGHT FOR THE
  // "links-container" INITIAL AND RESULTING HEIGHT VALUES.
  // THIS WAY WE CAN DO WITHOUT 
  //    .links-container {
  //      height: auto !important;
  //    }
  // FOR THE WIDE SCREEN DISPLAY. HOWEVER!
  // THE TRANSITION EFFECTS BECOME LESS SMOOTH AND NEED FIXING.
  // if (containerHeight == 0) {
  //   linksContainer.style["max-height"] = "1000px";
  // } else {
  //   linksContainer.style["max-height"] = 0;
  // }
});

// ********** fixed navbar ************
// fixed navbar means that the navbar (with the fixed position) appears 
// at the top of the page when we scroll down
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const scrollOffset = navBar.getBoundingClientRect().height * 2;

window.addEventListener("scroll", function() {
  if (window.scrollY > scrollOffset) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  if (window.scrollY > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll **********
// smooth scroll here means "precise scroll", i.e. scroll that
// stops at such location so that the section header is visible and
// is located at the top

// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    // prevent default behavior
    e.preventDefault();
    
    // navigate to specific spot
    // fetch the id of the link and assign it to a variable
    const id = e.currentTarget.getAttribute("href").slice(1);
    
    // select the element by the id we fetched above and assign
    // it to a variable (in order to know where to scroll to)
    const section = document.getElementById(id);
    
    // identify (calculate) the exact position of the section
    const position = calculatePosition(section);
    
    window.scrollTo({left:0, top: position});
    linksContainer.style.height = 0;
  });
});

function calculatePosition(element) {

  const navBarHeight = navBar.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const fixedNav = navBar.classList.contains("fixed-nav");
  console.log(navBarHeight);

  let position = element.offsetTop - navBarHeight;
  
  if(!fixedNav){
    position = position - navBarHeight;
  }
  
  // standard navBarHeight is around 82px.
  // When we open the navbar (on a narrow srceen), 
  // the height becomes bigger.
  if(navBarHeight > 82) {
    position = position + containerHeight;
  }
  return position;
}
