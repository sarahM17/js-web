//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let click = document.getElementById("clickme");
let button1 = document.getElementById("Cookie");
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button2 = document.getElementById("button2");
button2.disabled = true;
button3.disabled = true;
count = 0;

let multiplierCost = 50;
let autoclickCost = 100;

let clickValue = 1;
let multiplier = 1;
let autoplier = 1;

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

function displayCount() {
  clickme.innerHTML = count;
}

function displayMultiplier() {
  button3.value = 'Multiplier x' + multiplier + ' (next: cost ' + multiplierCost + ')';
}

button1.onclick = function() {
  count += clickValue;
  clickme.innerHTML = "Click me: " + count; 

  if (count < multiplierCost) {
    button2.disabled = true; 
  }
  else if (count >= multiplierCost) {
    button2.disabled = false;
  }
  if (count < autoclickCost) {
    button3.disabled = true;
  } 
  else if (count >= autoclickCost) {
    button3.disabled = false;
    
  }
};

Cookie.addEventListener("click", function(e) {
    e.preventDefault;

    Cookie.classList.remove("animated");
    void Cookie.offsetWidth;
    Cookie.classList.add("animated");
        
    navigator.vibrate(100);
}, false);

function multiplied() {
  count -= multiplierCost;
  multiplier *= 2;
  clickValue = multiplier;
  
  multiplierCost *= 1.5;
  displayCount()
  displayMultiplier()
 
}

function increaseScore() {
  count = clickValue;
  ;}

function autoclick() {
  count -= autoclickCost;
  autoclickCost *= 1.5;
  displayCount();
  autoclickF()
  
}

function autoclickF() {
    console.log("it on");
    setInterval(function() { 
    autoplier += 1;
    clickValue = autoplier;
    clickme.innerHTML = clickValue;

    if (clickValue < multiplierCost) {
      button2.disabled = true; 
    }
    else if (clickValue >= multiplierCost) {
      button2.disabled = false;
    }
    if (clickValue < autoclickCost) {
      button3.disabled = true;
    } 
    else if (clickValue >= autoclickCost) {
      button3.disabled = false;
      
    }
  }, 100); 
}


