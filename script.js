import  { sweetinfo} from "./sweet.js";

let btn1 = document.getElementById('btn1')

let insiMessage = "This is Info Alert";
btn1.addEventListener("click", () => {
    sweetinfo(insiMessage);
});