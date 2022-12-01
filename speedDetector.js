//Challenge 2-Speed Detector
//This function dispalys "Ok" for a car whose speed is less than or equal to 70.For any speed above 70,a demerit point is awarded as speed increments by 5.Above 12 demerit points, the license is suspended.

//Allows user to input speed when the code is run
const prompt = require("prompt-sync")();
const speed = prompt("Please input the speed: ");

//This function prints a certain output depending on the speed input.
function  printReceipt() {
    if (speed <= 70) {
        return"Ok";
    } else {
        let points= (speed-70)/5;
        if (points>=12) {
            return"License suspended";
        } else {
            return("Points:" +points);
        }
    } 
}

//This code prints the output.
console.log(printReceipt());