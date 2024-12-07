import  { sweetinfo , sweetSuccess } from "./sweet.js";

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');



let successMessage = "This is a Success Alert!";
let Success="Success";



let insiMessage = "This is Info Alert";
btn1.addEventListener("click", () => {
    sweetinfo(insiMessage);
});


btn2.addEventListener("click", () => {
    sweetSuccess(successMessage ,Success);
});

