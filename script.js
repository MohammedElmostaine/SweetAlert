import  { sweetinfo , sweetSuccess , sweetWarning} from "./sweet.js";

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');


let successMessage = "This is a Success Alert!";
let Success="Success";

let warningMessage = "This is a Warning Alert!";
let warningTitle = "Warning";

let infoMessage = "This is Info Alert";
let infotitle = "Info"

btn1.addEventListener("click", () => {
    sweetinfo(infoMessage ,infotitle );
});


btn2.addEventListener("click", () => {
    sweetSuccess(successMessage ,Success);
});

btn3.addEventListener("click", () => {
    sweetWarning(warningMessage, warningTitle);
});