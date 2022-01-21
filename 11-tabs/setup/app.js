const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
// const article = about.querySelector(".content");

// ********** MY SOLUTION **********
about.addEventListener("click", function(e) {
  
  const clickedBtnId = e.target.dataset.id;
  
  // did we actually hit the button?
  if (clickedBtnId == undefined) {
    return;
  }

  // Cycle through each button
  // to check if the clicked button ID matches
  // the ID of the button in the cycle (Nth button)
  btns.forEach(function(btn) {
    
    // get Nth button id
    const nthBtnId = btn.dataset.id;
    // get the Nth article 
    const nthArticle = document.getElementById(checkedBtnId);

    // is Nth button active?
    if (btn.classList.contains("active")) {
      // YES

      // did we click the nth button?
      if (nthBtnId !== clickedBtnId) {
      
        // NO (we clicked another button): 
        // make the Nth button and the Nth article INACTIVE
        btn.classList.remove("active");
        nthArticle.classList.remove("active");
      
      } // YES: do nothing
      
      // NO
    } else {
      
      // did we click the Nth button?
      if (nthBtnId == clickedBtnId) {
      
        // YES: make the Nth button and the Nth article ACTIVE
        btn.classList.add("active");
        nthArticle.classList.add("active");
      
      } // NO: do nothing
    }
  });
});