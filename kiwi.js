const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    closeAll(mDropDown);
});

const mDropDown = document.querySelectorAll(".drop-down");
console.log(mDropDown);


// FOR MOBILE
for(let i = 0; i < mDropDown.length; i++){
    mDropDown[i].addEventListener("click",()=>{
        let dropoDownStatus = mDropDown[i].childNodes[3].style.display;

        if(mDropDown[i].classList.contains("m-drop-down") == true){
            if(dropoDownStatus === "flex" ){
                mDropDown[i].childNodes[3].style.display = "none";

                mDropDown[i].childNodes[1].childNodes[1].classList.add("fa-caret-down");
                mDropDown[i].childNodes[1].childNodes[1].classList.remove("fa-caret-up");
            } else {
                closeAll(mDropDown);
                mDropDown[i].childNodes[3].style.display = "flex";

                mDropDown[i].childNodes[1].childNodes[1].classList.remove("fa-caret-down");
                mDropDown[i].childNodes[1].childNodes[1].classList.add("fa-caret-up");
            }
        }
    })
}

// FOR PC
for(let i = 0; i < mDropDown.length; i++){
    mDropDown[i].addEventListener("mouseenter",()=>{
        let dropoDownStatus = mDropDown[i].childNodes[3].style.display;
        if(mDropDown[i].classList.contains("pc-drop-down") == true){
            if(dropoDownStatus === "none" ){
                closeAllpc(mDropDown);
                mDropDown[i].childNodes[3].style.display = "flex";
                mDropDown[i].childNodes[1].childNodes[1].classList.remove("fa-caret-down");
                mDropDown[i].childNodes[1].childNodes[1].classList.add("fa-caret-up");
            }
        }
    })

}



function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
      for(let i = 0; i < mDropDown.length; i++){
        mDropDown[i].classList.toggle("m-drop-down");
        mDropDown[i].classList.remove("pc-drop-down");
      }
      closeAll(mDropDown);
    } else {
      document.body.style.backgroundColor = "pink";
      for(let i = 0; i < mDropDown.length; i++){
        mDropDown[i].classList.remove("m-drop-down");
        mDropDown[i].classList.toggle("pc-drop-down");
      }
      closeAllpc(mDropDown);
    }
}
  
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 850px)")
  
// Call listener function at run time
myFunction(x);
  
// Attach listener function on state changes
x.addEventListener("change", function() {
    myFunction(x);
});


// Close if pressed on drop down undermenu option

const underMenuOptions = document.querySelectorAll(".under-menu-options");
for(let i = 0; i < underMenuOptions.length; i++){
    underMenuOptions[i].childNodes.forEach(el => () => {
        el.addEventListener("click", closeAll());
    })
}


// Closing other drop-downs mobile

function closeAll(arg){
    for(let i = 0; i < arg.length; i++){
        if(arg[i].classList.contains("m-drop-down") == true){
            arg[i].childNodes[3].style.display = "none";
            arg[i].childNodes[1].childNodes[1].classList.add("fa-caret-down");
            arg[i].childNodes[1].childNodes[1].classList.remove("fa-caret-up");
        }
    }
}

// Close if pressed on any other place
document.addEventListener("click", function(e){
    if(!navMenu.contains(e.target)){
        closeAll(mDropDown);
    }
});


function closeAllpc(arg){
    for(let i = 0; i < arg.length; i++){
        if(arg[i].classList.contains("pc-drop-down") == true){
            arg[i].childNodes[3].style.display = "none";
            arg[i].childNodes[1].childNodes[1].classList.add("fa-caret-down");
            arg[i].childNodes[1].childNodes[1].classList.remove("fa-caret-up");
        }
    }
}


document.addEventListener("mouseover", function(e){
    if(!header.contains(e.target)){
        closeAllpc(mDropDown);
    }
    document.querySelectorAll(".non-drop-down").forEach((element)=>{
        if(element.contains(e.target)){
            closeAllpc(mDropDown);
        }
    })
});

document.addEventListener("mouseleave", function(event){
    if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
    {
        closeAllpc(mDropDown);
    }
});
