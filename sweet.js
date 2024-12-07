

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


function sweetSuccess(message ,Success) {
    const bodyofSuccessalert = document.createElement("div");
    bodyofSuccessalert.classList.add("sweetSuccessSec" , "sweetSec");
    bodyofSuccessalert.innerHTML = `<div class ="sweet" id="sweetSuccess">
                            <h1 class ="title" id = "Successtitle">${Success}&nbsp <i class="fa-solid fa-check"></i></h1>
                            <p class ="Parag" id = "SuccessParag">${message}</p>
                            <i  id = "iconeCloseSuccess" class="iconeClose fa-solid fa-circle-xmark" style="color: #000000; "></i>
                            <hr>
                            </div>  `;

    const body = document.querySelector("body");
    body.appendChild(bodyofSuccessalert);
    const iconeCloseSuccess = document.querySelector("#iconeCloseSuccess");
    iconeCloseSuccess.addEventListener("click", ()=> {
        const sweetSucSec = document.querySelector(".sweetSuccessSec"); 
    if (sweetSucSec) {
        sweetSucSec.remove();
    }
    })
    setTimeout(() => {
        if (sweetSucSec) {
            sweetSucSec.remove();
        }
    }, 3000);
   
}










export { sweetinfo , sweetSuccess };




