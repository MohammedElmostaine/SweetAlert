import  { sweetinfo , sweetSuccess} from "./sweet.js";

let btn1 = document.getElementById('btn1')

let insiMessage = "This is Info Alert";
let info = "Info"


btn1.addEventListener("click", () => {
    sweetinfo(insiMessage ,info);
});
