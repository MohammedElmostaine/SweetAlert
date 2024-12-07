

function sweetinfo(message) {
    const bodyofalert = document.createElement("div");
    bodyofalert.classList.add("sweetinfoSec");
    bodyofalert.innerHTML = `<div class ="sweet" id="sweetinfo">
                            <h1 class ="title" id = "infotitle">Info Alert</h1>
                            <p class ="Parag" id = "infoParag">${message}</p>
                            <i  id = "iconeCloseinfo" class="iconeClose fa-solid fa-circle-xmark" style="color: #000000; "></i>
                            <hr class="infohr">
                            </div> ` ;

    const body = document.querySelector("body");
    body.appendChild(bodyofalert);
    const iconeCloseinfo = document.querySelector("#iconeCloseinfo");
    iconeCloseinfo.addEventListener("click", ()=> {
        const sweetSec = document.querySelector(".sweetinfoSec"); 
    if (sweetSec) {
        sweetSec.remove();
    }
    })
}










export { sweetinfo };


// <div class ="sweetSec" >
//         <div class ="sweet" id="sweetinfo">
//             <h1 class ="title" id = "infotitle">Info Alert</h1>
//             <p class ="Parag" id = "infoParag">${message}</p>
//             <i  id = "iconeClose" class="iconeClose fa-solid fa-circle-xmark" style="color: #000000; "></i>
//             <hr class="infohr">
//         </div>
//         </div>

