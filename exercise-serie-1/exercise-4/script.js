//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...



function myFunction() {
    let day = document.getElementById("date1").value;
    let month = document.getElementById("date2").value;
    let year = document.getElementById("date3").value;

    let birthday = new Date(year,(month-1),day);
    let now = new Date();
  
    let age = now.getFullYear() - birthday.getFullYear();
    
    if (now.getMonth() <= birthday.getMonth() && now.getDate() < birthday.getDate()) {
        age--;}

    let result = document.getElementById("result");
    result.textContent = age;


    console.log(now.getFullYear());
    console.log(birthday);

}
    














