
var firstName = "Hi, my name is marufa";

var lastName = "I'm 23 years old";


document.getElementById("student_message").innerHTML  = firstName + " , " +  lastName ;  

//  third exercice 

var Number1 = "101";

var number2 = "7";  


document.getElementById("result").innerHTML  = Number1/ number2;   

// 4th exercise  


var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123; 

if(phone1.length==9){
    console.log("valid");
} else {
    console.log("invlid");
}

if(phone2.length==11){
    console.log("valid");
} else {
    console.log("invlid");
}

if(phone3.length==9){
    console.log("valid");
} else {
    console.log("invlid");
} 

// 5th exercise  
var power = Math.pow(32,6);  
console.log ( power)  





// 7th exercise
var quantity = "25"; 

console.log(quantity += quantity); 

var number = 6; 

console.log(quantity += quantity);  

var pressure; 
console.log(pressure); 
console.log(typeof pressure);  

var temperature = null;  
console.log(temperature); 
console.log(typeof temperature); 

// function divisionNumbers(c) {
//     var result =(9* c / 5) + 32; 
//     return result
// } 
// var divisionResult= divisionNumbers(38);
// document.getElementById("fahr_1").innerHTML= divisionResult; 


// 8th exercise
// 1)

var getAddressFromWebsite = document.getElementById("url_1").innerText;
console.log(getAddressFromWebsite);

var modifyAddress = "https://" + getAddressFromWebsite;
console.log(modifyAddress);


document.getElementById("url_2").innerHTML = modifyAddress;


// 2

var getAddress = document.getElementById("url_3").innerText;
console.log(getAddress);

var modifyAddress = ( getAddress.replace("https://" , "") ) ;
console.log(modifyAddress);

document.getElementById("url_4").innerText = modifyAddress;




