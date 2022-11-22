const testDriveBtn = document.querySelector(".test-drive-btn");
const popout = document.querySelector(".popout");
testDriveBtn.addEventListener("click", () => {
  popout.style.display = "none";
});
const testDriveSendBtn = document.querySelector(".test-drive-send-btn");
testDriveSendBtn.addEventListener("click", () => {
  popout.style.display = "flex";
});
const menuHamburgerContainer = document.querySelector(
  ".menu-hamburger-container"
);
const menuHamburgerBtn = document.querySelector(".menu-hamburger");
menuHamburgerBtn.addEventListener("click", () => {
  menuHamburgerContainer.style.display = "flex";
});
const xMarkBtn = document.querySelector(".x-mark");
xMarkBtn.addEventListener("click", () => {
  menuHamburgerContainer.style.display = "none";
});

function navToElement(e) {
  if (e.target.matches(".nav-to-facts-1")) {
    const facts1Container = document.querySelector(".facts-1-container");
    const facts1Position = facts1Container.getBoundingClientRect();
    menuHamburgerContainer.style.display = "none";
    console.log(facts1Position.top);
    scrollTo(0, facts1Position.top);
  } else if (e.target.matches(".nav-to-facts-2")) {
    const facts2Container = document.querySelector(".facts-2-container");
    const facts2Position = facts2Container.getBoundingClientRect();
    menuHamburgerContainer.style.display = "none";
    scrollTo(0, facts2Position.top);
  } else if (e.target.matches(".nav-to-gallery")) {
    const galleryContainer = document.querySelector(".gallery");
    const galleryPosition = galleryContainer.getBoundingClientRect();
    menuHamburgerContainer.style.display = "none";
    scrollTo(0, galleryPosition.top);
  } else if (e.target.matches(".nav-to-test-drive")) {
    const testDriveContainer = document.querySelector(".rect7-box");
    const testDrivePosition = testDriveContainer.getBoundingClientRect();
    menuHamburgerContainer.style.display = "none";
    scrollTo(0, testDrivePosition.top);
  }
}
menuHamburgerContainer.addEventListener("click", navToElement);
