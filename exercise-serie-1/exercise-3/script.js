//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let name = document.getElementById("name");
let Power = document.getElementById("Power");
let motivation = document.getElementById("motivation");
let plan = document.getElementById("plan");

let obj = document.getElementById("obj");
let obj2 = document.getElementById("obj2");

function clearFields() {

    name.value = "";
    Power.value = "";
    motivation.value = "";
    plan.value = "";
}

function myFunction() {
    if (name.value,Power.value,motivation.value,plan.value === "**"){
        alert("Please, fill in all the boxes!");
    }
    else {
        obj2.style.display = "block"; 
        obj.style.display = "none";

        let head1 = document.getElementById("name").value;
        document.getElementById("alinea1").innerHTML = "You're name is" + " " + head1;

        let head2 = document.getElementById("Power").value;
        document.getElementById("alinea2").innerHTML = "You're Power is" + " " + head2;

        let head3 = document.getElementById("motivation").value;
        document.getElementById("alinea3").innerHTML = "You're motivation is" + " " + head3;

        let head4 = document.getElementById("plan").value;
        document.getElementById("alinea4").innerHTML = "You're plan is" + " " + head4;


        return;
    }
    
    
    
}


