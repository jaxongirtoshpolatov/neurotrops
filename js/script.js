// intro swiper
try {
  var swiper = new Swiper(".intro__swiper", {
    slidesPerview: 1,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".next__btn",
      prevEl: ".prev__btn",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 800,
    breakpoints: {
      1024: {
        spaceBetween: 0,
      },
      0: {
        spaceBetween: 30,
      },
    },
  });
} catch (error) {}

try {
  // products swiper
  var swiper = new Swiper(".products__swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    grid: {
      rows: 2,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    allowTouchMove: false,
    breakpoints: {
      1024: {
        grid: {
          rows: 2,
        },
      },
      744: {
        grid: {
          rows: 1,
        },
        slidesPerView: 2.2,
      },
      0: {
        grid: {
          rows: 1,
        },
        slidesPerView: 1,
      },
    },
  });
} catch (error) {}
try {
  // product__img-swiper
  var swiper = new Swiper(".product__img-swiper", {
    // slidesPerview: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // effect: "fade",
    speed: 700,
  });
} catch (error) {}
try {
  // about__swiper
  var swiper = new Swiper(".about__swiper", {
    slidesPerView: 2.8,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2.8,
      },
      744: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
} catch (error) {}

try {
  // blog__swiper
  var swiper = new Swiper(".blog__swiper", {
    slidesPerView: 2,
    grid: {
      rows: 2,
    },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        grid: {
          rows: 2,
        },
      },
      744: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      },
    },
  });
} catch (error) {}
try {
  // events__swiper
  var swiper = new Swiper(".events__swiper", {
    slidesPerview: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".next__btn2",
      prevEl: ".prev__btn2",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 700,
    breakpoints: {
      1025: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2.8,
      },
      744: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
} catch (error) {}

try {
  // reviews__swiper
  var swiper = new Swiper(".reviews__swiper", {
    slidesPerView: 2.8,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2.8,
      },
      744: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
} catch (error) {}
try {
  // media__swiper
  var swiper = new Swiper(".media__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
      },
      744: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
  const mediaSwiper = document.querySelector(".media__swiper");
  const reviewsTab = document.querySelector(".tabslide");
  if (window.innerWidth < 1024) {
    mediaSwiper.classList.add("swiper");
    reviewsTab.classList.add("swiper-wrapper");
    reviewsTab.classList.remove("reviews__tab");
  }
} catch (error) {}
// products
// const products = document.querySelectorAll(".product__img");

// products.forEach((product) => {
//   const productFavouriteBtn = product.querySelector(".product__favourite");
//   productFavouriteBtn.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// });

// fixed question btn
const questionBtn = document.querySelector(".question__box-btn");
const socialMediaBox = document.querySelector(".socail__media");

questionBtn.addEventListener("click", () => {
  socialMediaBox.classList.toggle("show");
});

// accordion
const accordion = document.querySelectorAll(".accordion");

accordion.forEach((item) => {
  const accordionBtn = item.querySelector(".accordion__arrow");
  accordionBtn.addEventListener("click", () => {
    item.classList.toggle("is__open");
  });
});

try {
  // counter
  const countNumber = document.querySelector(".count__number");
  const decrement = document.querySelector(".decrement");
  const increment = document.querySelector(".increment");

  const MAX_COUNT = 20;
  const MIN_COUNT = 1;

  decrement.addEventListener("click", () => {
    let count = parseInt(countNumber.textContent);
    if (count > MIN_COUNT) {
      count--;
      countNumber.textContent = count;
    }
    if (count <= MIN_COUNT) {
      decrement.classList.add("disabled");
    }
    if (count < MAX_COUNT) {
      increment.classList.remove("disabled");
    }
  });

  increment.addEventListener("click", () => {
    let count = parseInt(countNumber.textContent);
    if (count < MAX_COUNT) {
      count++;
      countNumber.textContent = count;
    }
    if (count >= MAX_COUNT) {
      increment.classList.add("disabled");
    }
    if (count > MIN_COUNT) {
      decrement.classList.remove("disabled");
    }
  });
} catch (error) {}

try {
  // tabs
  const tabItems = document.querySelectorAll(".tab__item");
  const tabContent = document.querySelectorAll(".tab__content");

  function hideTabs() {
    tabItems.forEach((item) => item.classList.remove("active"));
    tabContent.forEach((content) => content.classList.remove("show"));
    tabContent.forEach((content) => content.classList.add("hide"));
  }
  function showTabs(idx = 0) {
    tabItems[idx].classList.add("active");
    tabContent[idx].classList.remove("hide");
    tabContent[idx].classList.add("show");
  }

  hideTabs();
  showTabs();

  tabItems.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
      hideTabs();
      showTabs(idx);
    });
  });
} catch (error) {}

// menu
const mediaMenu = document.querySelector(".meida__menu");
const closeBtn = document.querySelector(".close__btn");
const openMenu = document.querySelector(".open__menu");

openMenu.addEventListener("click", () => {
  mediaMenu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  mediaMenu.classList.remove("active");
});

// show__more
const showMoreBtn = document.querySelector(".show__more-btn");
if (showMoreBtn) {
  const products = document.querySelectorAll(".products__page .product__card");

  if (window.innerWidth < 1024) {
    for (let i = 4; i < products.length; i++) {
      products[i].style.display = "none";
    }
  }

  showMoreBtn.addEventListener("click", function () {
    products.forEach((product) => {
      product.style.display = "block";
    });
    showMoreBtn.style.display = "none";
  });
}

try {
  // const productImg = document.querySelectorAll(".product__img");
  // productImg.forEach((item) => {
  //   const favouriteBtn = item.querySelector(".product__favourite");
  //   if (favouriteBtn) {
  //     favouriteBtn.addEventListener("click", () => {
  //       favouriteBtn.classList.toggle("active");
  //     });
  //   }
  // });
} catch (error) {}

// modal
try {
  const cartModal = document.querySelector(".product__cart");
  const openProductCartModal = document.querySelectorAll(".product__cart-open");
  const closeProductCartModal = document.querySelector(".product__cart-close");

  function hideCartModal() {
    cartModal.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
  function showCartModal() {
    cartModal.classList.add("show");
    document.body.classList.add("no-scroll");
  }
  openProductCartModal.forEach((btn) =>
    btn.addEventListener("click", showCartModal)
  );
  closeProductCartModal.addEventListener("click", hideCartModal);
  cartModal.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("product__cart")) {
      hideCartModal();
    }
  });
} catch (error) {}

try {
  const favouriteModal = document.querySelector(".favourite__modal");
  const favouriteModalClose = document.querySelector(".favourite__modal-close");
  const openFavouriteModal = document.querySelectorAll(".product__favourite");

  function hideFavouriteModal() {
    favouriteModal.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
  function showFavouriteModal() {
    favouriteModal.classList.add("show");
    document.body.classList.add("no-scroll");
  }
  openFavouriteModal.forEach((btn) =>
    btn.addEventListener("click", showFavouriteModal)
  );
  favouriteModalClose.addEventListener("click", hideFavouriteModal);
  favouriteModal.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("favourite__modal")) {
      hideFavouriteModal();
    }
  });
} catch (error) {}

try {
  const productCards = document.querySelectorAll(".product__card");

  productCards.forEach((card) => {
    const productWeightList = card.querySelectorAll(".product__weight");

    productWeightList.forEach((weight) => {
      weight.addEventListener("click", () => {
        weight.classList.add("active");
        productWeightList.forEach((w) => {
          if (w !== weight) {
            w.classList.remove("active");
          }
        });
      });
    });
  });
} catch (error) {}

// call__back-modal
const callModal = document.querySelector(".call__back-modal");
const openCallModal = document.querySelector(".open__call-modal");
const closeCallModal = document.querySelector(".close__call-modal");

function showCallModa() {
  callModal.classList.add("show");
  document.body.classList.add("no-scroll");
}
function hideCallModal() {
  callModal.classList.remove("show");
  document.body.classList.remove("no-scroll");
}

openCallModal.addEventListener("click", showCallModa);
closeCallModal.addEventListener("click", hideCallModal);

callModal.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("call__back-modal")) {
    hideCallModal();
  }
});

// cookies__modal
try {
  const cookiesModal = document.querySelector(".cookies__modal");
  const closeCookiesModal = document.querySelectorAll(".close__cookies-modal");

  function hideCookiesModal() {
    cookiesModal.classList.remove("show");
    document.body.classList.remove("no-scroll");
    localStorage.setItem("modalShown", "true");
  }

  function showCookiesModal() {
    cookiesModal.classList.add("show");
    document.body.classList.add("no-scroll");
  }

  closeCookiesModal.forEach((btn) =>
    btn.addEventListener("click", hideCookiesModal)
  );

  window.addEventListener("load", () => {
    if (localStorage.getItem("modalShown") !== "true") {
      showCookiesModal();
    }
  });
} catch (error) {}

// const element = document.querySelector("input[tel]");
// const maskOptions = {
//   mask: "+{7}(000)000-00-00",
// };
// const mask = IMask(element, maskOptions);