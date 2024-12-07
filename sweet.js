

function sweetinfo(message ,info) {
    const bodyofalert = document.createElement("div");
    bodyofalert.classList.add("sweetinfoSec" , "sweetSec");
    bodyofalert.innerHTML = `<div class ="sweet" id="sweetinfo">
                            <h1 class ="title" id = "infotitle">${info}</h1>
                            <p class ="Parag" id = "infoParag">${message}</p>
                            <i  id = "iconeCloseinfo" class="iconeClose fa-solid fa-circle-xmark" style="color: #000000; "></i>
                            <hr class="infohr">
                            </div> ` ;

    const body = document.querySelector("body");
    body.appendChild(bodyofalert);
    const iconeCloseinfo = document.querySelector("#iconeCloseinfo");
    const sweetSec = document.querySelector(".sweetinfoSec"); 

    iconeCloseinfo.addEventListener("click", ()=> {  
    if (sweetSec) {
        sweetSec.remove();
    }
    })

    setTimeout(() => {
        if (sweetSec) {
            sweetSec.remove();
        }
    }, 3000);
   
    
}








export { sweetinfo , sweetSuccess};


// <div class ="sweetSec" >
//         <div class ="sweet" id="sweetinfo">
//             <h1 class ="title" id = "infotitle">Info Alert</h1>
//             <p class ="Parag" id = "infoParag">${message}</p>
//             <i  id = "iconeClose" class="iconeClose fa-solid fa-circle-xmark" style="color: #000000; "></i>
//             <hr class="infohr">
//         </div>
//         </div>

