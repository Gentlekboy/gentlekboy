const btn = document.getElementById("btn");

if (btn) {
  btn.addEventListener("click", function () {
    const mobileNav = document.getElementById("mobileNav");
    if (!mobileNav) return;
    mobileNav.classList.toggle("show");
  });
}

// Projects slider (only exists on index.html)
const projectContainer = document.querySelector(".projectContainer .description");
const arrowBtnLeft = document.getElementById("arrowBtnLeft");
const arrowBtnRight = document.getElementById("arrowBtnRight");

if (projectContainer && arrowBtnLeft && arrowBtnRight) {
  // Calculate the width to scroll (container width)
  const getScrollAmount = () => {
    return projectContainer.clientWidth;
  };

  // Add click event listeners to the arrow buttons
  arrowBtnLeft.addEventListener("click", () => {
    projectContainer.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  });

  arrowBtnRight.addEventListener("click", () => {
    projectContainer.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  });

  // Update arrow visibility based on scroll position
  const updateArrowVisibility = () => {
    const isAtStart = projectContainer.scrollLeft <= 0;
    const isAtEnd =
      projectContainer.scrollLeft >=
      projectContainer.scrollWidth - projectContainer.clientWidth;

    arrowBtnLeft.style.opacity = isAtStart ? "0.5" : "1";
    arrowBtnRight.style.opacity = isAtEnd ? "0.5" : "1";
  };

  // Add scroll event listener to update arrow visibility
  projectContainer.addEventListener("scroll", updateArrowVisibility);

  // Initialize arrow visibility
  updateArrowVisibility();
}

// (Homepage projects now links out to dedicated pages)
