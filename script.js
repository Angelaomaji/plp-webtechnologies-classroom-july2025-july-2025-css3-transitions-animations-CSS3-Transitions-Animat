// -----------------------------
// Part 2: JavaScript Functions
// -----------------------------

// Global variable
let globalMessage = "I am global!";

// Function with parameters & return
function addNumbers(a, b) {
  return a + b; // returns a value
}

// Function showing local vs global scope
function scopeExample() {
  let localMessage = "I am local!";
  console.log("Inside function:", localMessage);
  console.log("Inside function (global):", globalMessage);
}

// Function to calculate area of a rectangle
function calculateArea(width, height) {
  return width * height;
}

// Testing functions in console
console.log("5 + 3 =", addNumbers(5, 3));
scopeExample();
console.log("Area of 4x6 =", calculateArea(4, 6));

// -----------------------------
// Part 3: Combining CSS + JS
// -----------------------------

const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

// Reusable function to toggle animation
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

// Trigger animation on click
animateBtn.addEventListener("click", function() {
  toggleAnimation(jsBox, "animate");
});
