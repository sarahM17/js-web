//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let x = 0;
let trollbutton = document.getElementById("trollButton");
            
function move() {
    if(x !== 10){
        x = 0;
    }

	trollbutton.style.left = Math.floor((Math.random()*400)+1) + "px";
	trollbutton.style.top = Math.floor((Math.random()*450)+1) + "px";
				
	if (trollbutton.innerHTML == "Click me!") {
        trollbutton.innerHTML = "Troll";
        x++;
    } 
    else { 
        trollbutton.innerHTML += "lol";
        x++;
    }
        
    }
