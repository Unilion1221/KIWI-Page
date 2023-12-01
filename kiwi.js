const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    closeAll(mDropDown);
});

const mDropDown = document.querySelectorAll(".drop-down");
console.log(mDropDown);


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

function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
      for(let i = 0; i < mDropDown.length; i++){
        mDropDown[i].classList.toggle("m-drop-down");
      }

      console.log(mDropDown[0].classList.contains("m-drop-down"));
    } else {
      document.body.style.backgroundColor = "pink";
      for(let i = 0; i < mDropDown.length; i++){
        mDropDown[i].classList.remove("m-drop-down");
      }
      closeAll(mDropDown);

      console.log(mDropDown[0].classList.contains("m-drop-down"));
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


// Closing other drop-downs

function closeAll(arg){
    for(let i = 0; i < arg.length; i++){
        arg[i].childNodes[3].style.display = "none";
        arg[i].childNodes[1].childNodes[1].classList.add("fa-caret-down");
        arg[i].childNodes[1].childNodes[1].classList.remove("fa-caret-up");
    }
}

// Close if pressed on any other place
document.addEventListener("click", function(e){
    if(!navMenu.contains(e.target)){
        closeAll(mDropDown);
    }
});


// Close if pressed on drop down undermenu option

const underMenuOptions = document.querySelectorAll(".under-menu-options");
for(let i = 0; i < underMenuOptions.length; i++){
    underMenuOptions[i].childNodes.forEach(el => () => {
        el.addEventListener("click", closeAll());
    })
}




