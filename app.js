

// let liked = document.querySelectorAll(".like");
// let btnAdd = document.querySelectorAll(".btn-add-to-cart");
// let productCountEl = document.querySelector(".products-count");

// // product  likes

// liked.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("liked");
//     //this.style.background = "red";       // добавить цвет

//     // if (item.classList.contains("liked")) {
//     //   item.classList.remove("liked");
//     // } else {
//     //   item.classList.add("liked");
//     // }                           // второй вариант решения
//   })
// );

// // product counter

// btnAdd.forEach((item) =>
//   item.addEventListener("click", function () {
//     productCountEl.textContent = +productCountEl.textContent + 1;
//   })
// );

// // modal

// let moredetailsBtns = document.querySelectorAll(".btn-more-details");
// let modal = document.querySelector('modal');
// let btnclose = document.querySelector

// function closeModal() {
//   modal.classList.add("hide");
//   modal.classList.remove("show");
// }
// btnClose.addEventListener("click", closeModal);


// // Counter function constructor
// let decrementBtns = document.querySelectorAll(".decrement-button")[0];
// let incrementBtns = document.querySelectorAll(".increment-button")[0];
// let quantityInput = document.querySelectorAll(".product-quantity input")[0];


// ---------slider--------
$(".slider-block").slick( {
dots: true, 

}
);


function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
}

const counter = new Counter(incrementBtns, decrementBtns, quantityInput);

console.log(counter);



