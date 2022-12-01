//Chellenge 1-Student Grade Generator
//This function takes a students marks and outputs a certain grade depending to the range of marks where the mark is located.
const prompt = require("prompt-sync")();
var marks = prompt("Enter student marks: ");

function giveGrades(marks) {
    let output;
    if (marks > 79 && marks <= 100){
        output=["Grade: A"];
        return(output);
    }
    else if(marks>= 60 && marks <= 79) {
        output=["Grade: B"];
        return (output);
    }
    else if(marks > 49 && marks < 60) {
        output=["Grade: C"];
        return(output);
    }
    else if(marks >= 40 && marks <= 49) {
        output=["Grade: D"];
        return(output);ks
    }
    else if (marks < 40) {
        output=["Grade: E"];
        return(output);
    }
}  
console.log(giveGrades(marks));  

