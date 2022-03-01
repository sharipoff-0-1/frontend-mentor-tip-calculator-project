const tipPercent = document.querySelectorAll(".btn");
const billInput = parseFloat(document.getElementById("bill").value);
const customPercent = parseFloat(document.querySelector(".custom").value);
const errorMsg = document.getElementById("error");
const tipAmountPerson = document.getElementById("tip-amount");
const totalAmountPerson = document.getElementById("total-amount");
const peopleAmount = document.getElementById("people");

tipPercent.forEach((percent) => {
  percent.addEventListener("click", (e) => {
    e.preventDefault;
    calcTip();
  });
});

// const totalAmount =
//   (billInput + (tipPercent.value / 100) * billInput) / peopleAmount;
// const tipAmount = (billInput * (tipPercent.value / 100)) / peopleAmount;
// console.log(tipPercent.value);
// tipAmountPerson.innerHTML = tipAmount.toFixed(2);
// totalAmountPerson.innerHTML = totalAmount.toFixed(2);

// calculation
function calcTip() {
  if (isActive) {
    console.log("is working");
  } else {
    isZero();
  }
}

// people input validation
function isActive() {}

function isZero() {
  peopleAmount.addEventListener("blur", () => {
    if (Number(peopleAmount.value) === 0 && peopleAmount.value === "") {
      console.log(peopleAmount.value);
      errorMsg.classList.remove("hidden");
      errorMsg.classList.add("zero");
      peopleAmount.classList.add("people-zero");
    } else {
      peopleAmount.addEventListener("focus", () => {
        errorMsg.classList.add("hidden");
        errorMsg.classList.remove("zero");
        peopleAmount.classList.remove("people-zero");
      });
    }
  });
}
