// const gf = document.querySelector(".gf");
// const gfg = document.querySelector(".gfg");

// gf.addEventListener("click", (eo) => {
//     eo.preventDefault();
//     gfg.classList.add("active");
// })

// <!-- ========== Start Active Color On Nav Link ========== -->
const ul__menu = document.querySelector(".ul__menu"),
  navList = ul__menu.querySelectorAll("li"),
  totalNavList = navList.length;
console.log(totalNavList);

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", () => {
    console.log(this);

    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("activated");
    }
    this.classList.add("activated");
  });
}
// console.log(ul__menu);

// ul__menu.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     console.log(this.el);
//     ul__menu.forEach((act) => act.classList.remove("activated"));
//     this.classList.add("activated");
//   });
// });

// function resetLinks() {
//   ul__menu.forEach((act) => {
//     act.classList.remove("activated");
//   });
// }
// <!-- ========== End Active Color On Nav Link ========== -->

// <!-- ========== Start Switcher Colors ========== -->

const main__switcher__themes = document.querySelector(
  ".main__switcher__themes"
);
const icone__terss = document.querySelector(".icone__terss");

icone__terss.addEventListener("click", (eo) => {
  main__switcher__themes.classList.toggle("open__Switcher");
});

// <!-- ========== Start Switcher Colors On Scrolling ========== -->

window.addEventListener("scroll", (eo) => {
  if (main__switcher__themes.classList.contains("open__Switcher")) {
    main__switcher__themes.classList.remove("open__Switcher");
  }
});

// <!-- ========== End Switcher Colors On Scrolling ========== -->

// <!-- ========== Start Switcher Colors  ========== -->

const colors__style = document.querySelectorAll(".colors__style");

function setactiveStyle(color) {
  colors__style.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// <!-- ========== Start Light And Dark Mood  ========== -->

const icon__dark__light = document.querySelector(".icon__dark__light");
const fa_sun = document.querySelector(".fa-sun");
const main__body__container = document.querySelector(".main__body__container");

icon__dark__light.addEventListener("click", (eo) => {
  icon__dark__light.querySelector("i").classList.toggle("fa-sun");
  if (icon__dark__light.querySelector("i").classList.contains("fa-moon")) {
    main__body__container.classList.toggle("dark");
  }
});
// <!-- ========== End Light And Dark Mood  ========== -->

// <!-- ==========  End Typing  ========== -->

// <!-- ==========  Start Bars Toggel  ========== -->
const menu__bottom = document.querySelector(".menu__bottom");
const main__aside = document.querySelector(".main__aside");

menu__bottom.addEventListener("click", (e) => {
  main__aside.classList.toggle("left");
  menu__bottom.classList.toggle("left_button_bars");
});

// <!-- ==========  End Bars Toggel  ========== -->

// <!-- ==========  Certificate style ========== -->

// document.querySelectorAll(".Image_Container img").forEach((image) => {
//   image.onclick = () => {
//     console.log("clicked");
//     document.querySelector(".popup_image").style.display = "block";
//     document.querySelector(".popup_image img").src = image.getAttribute("src");
//   };
// });
// document.querySelector(".popup_image span").onclick = () => {
//   document.querySelector(".popup_image").style.display = "none";
// };

const images = [...document.querySelectorAll(".image")];

// popup

const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const imageIndex = document.querySelector(".index");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let index = 0; // will track our current image;

images.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage(i);
    popup.classList.toggle("active");
  });
});

const updateImage = (i) => {
  let path = `images/img${i + 1}.jpg`;
  largeImage.src = path;
  // imageName.innerHTML = path;
  imageIndex.innerHTML = `0${i + 1}`;
  index = i;
};
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    popup.classList.toggle("active");
  });
}
if (leftArrow) {
  leftArrow.addEventListener("click", () => {
    if (index > 0) {
      updateImage(index - 1);
    }
  });
}
if (rightArrow) {
  rightArrow.addEventListener("click", () => {
    if (index < images.length - 1) {
      updateImage(index + 1);
    }
  });
}

// <!-- ==========  Start Typing  ========== -->

var typed = new Typed(".typing", {
  strings: ["Front End Developer"],
  typeSpeed: 100,
  BackSpeed: 100,
  loop: true,
});
// const textDisplay = document.getElementById("text_typing");
// const phrases = [
//   "Hello, my name is Ania.",
//   "I love to code.",
//   "I love to teach.",
// ];
// let i = 0;
// let j = 0;
// let currentPhrase = [];
// let isDeleting = false;
// let isEnd = false;

// function loop() {
//   isEnd = false;
//   textDisplay.innerHTML = currentPhrase.join("");

//   if (i < phrases.length) {
//     if (!isDeleting && j <= phrases[i].length) {
//       currentPhrase.push(phrases[i][j]);
//       j++;
//       textDisplay.innerHTML = currentPhrase.join("");
//     }

//     if (isDeleting && j <= phrases[i].length) {
//       currentPhrase.pop(phrases[i][j]);
//       j--;
//       textDisplay.innerHTML = currentPhrase.join("");
//     }

//     if (j == phrases[i].length) {
//       isEnd = true;
//       isDeleting = true;
//     }

//     if (isDeleting && j === 0) {
//       currentPhrase = [];
//       isDeleting = false;
//       i++;
//       if (i === phrases.length) {
//         i = 0;
//       }
//     }
//   }
//   const spedUp = Math.random() * (80 - 50) + 50;
//   const normalSpeed = Math.random() * (300 - 200) + 200;
//   const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
//   setTimeout(loop, time);
// }

// loop();
