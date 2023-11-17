var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
console.log(sliderImages);

sliderCount = sliderImages.length;

console.log(sliderCount);

var currentsSlide = 1;

var slideNumberElement = document.getElementById("slider-number");

var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

var paginationElemant = document.createElement("ul");

paginationElemant.setAttribute("id", "pagination-ul");

for (let i = 1; i <= sliderCount; i++) {
  var paginationItems = document.createElement("li");
  paginationItems.setAttribute("data-index", i);
  paginationItems.append(document.createTextNode(i));
  paginationElemant.append(paginationItems);
}

document.getElementById("indicators").append(paginationElemant);

var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentsSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

theChecker();

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentsSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentsSlide--;
    theChecker();
  }
}

function theChecker() {
  slideNumberElement.textContent =
    "Slide #" + currentsSlide + " of " + sliderCount;
    removeAllActive();
    sliderImages[currentsSlide - 1].classList.add("active");
    document
    .getElementById("pagination-ul")
    .children[currentsSlide - 1].classList.add("active");
    if (currentsSlide == 1) {
      prevButton.classList.add("disabled");
    } else {
      prevButton.classList.remove("disabled");
    }
    if (currentsSlide == sliderCount) {
      nextButton.classList.add("disabled");
    } else {
      nextButton.classList.remove("disabled");
    }
}

function removeAllActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  paginationBullets.forEach(function (li) {
    li.classList.remove("active");
  });
}
