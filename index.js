//Chellenge 1-Student Grade Generator
//This function takes a students marks and outputs a certain grade depending to the range of marks where the mark is located.

const marks= //("Enter your marks here: ");
function giveGrades() {
    if (marks > 79 && marks <= 100){
        let output=["Grade: A"];
        return(output);
    }
    else if(marks>= 60 && marks <= 79) {
        let output=["Grade: B"];
        return (output);
    }
    else if(marks > 49 && marks < 60) {
        let output=["Grade: C"];
        return(output);
    }
    else if(marks >= 40 && marks <= 49) {
        let output=["Grade: D"];
        return(output);
    }
    else if (marks < 40) {
        let output=["Grade: E"];
        return(output);
    }
}  
console.log(giveGrades());  


//Challenge 2-Speed Detector
//This function dispalys "Ok" for a car whose speed is less than or equal to 70.For any speed above 70,a demerit point is awarded as speed increments by 5.Above 12 demerit points, the license is suspended.

const speed= /*("Enter your speed: ");*/
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
console.log(printReceipt());

//Values for basic salary and benfits to be put in the parentheses;
const basicSalary= ("Enter basicSalary here-");
const benefits= ("Enter benefits amount here-");

//A funtion that calculates an individuals net salary while calculating PAYE,NHIF and NSSF Deductions;
function IndividualNetSalaryCalculator() {
    let grossSalary= basicSalary + benefits;
    const personalRelief = 2400;

// Calculates NHIF Deductions
let NHIFDeductions;
if(grossSalary <=5999) {NHIFDeductions = 150;}
else if(grossSalary > 5999 && grossSalary <= 7999) {NHIFDeductions = 300;}
else if(grossSalary > 7999 && grossSalary <=11999) {NHIFDeductions = 400;}
else if(grossSalary > 11999 && grossSalary <=14999) {NHIFDeductions = 500;}
else if(grossSalary > 14999 && grossSalary <=19999) {NHIFDeductions = 600;}
else if(grossSalary > 19999 && grossSalary <=24999) {NHIFDeductions = 750;}
else if(grossSalary > 24999 && grossSalary <=29999) {NHIFDeductions = 850;}
else if(grossSalary > 29999 && grossSalary <=34999) {NHIFDeductions = 900;}
else if(grossSalary > 34999 && grossSalary <=39999) {NHIFDeductions = 950;}
else if(grossSalary > 39999 && grossSalary <=44999) {NHIFDeductions = 1000;}
else if(grossSalary > 44999 && grossSalary <=49999) {NHIFDeductions = 1100;}
else if(grossSalary > 49999 && grossSalary <=59999) {NHIFDeductions = 1200;}
else if(grossSalary > 59999 && grossSalary <=69999) {NHIFDeductions = 1300;}
else if(grossSalary > 69999 && grossSalary <=79999) {NHIFDeductions = 1400;}
else if(grossSalary > 79999 && grossSalary <=89999) {NHIFDeductions = 1500;}
else if(grossSalary > 89999 && grossSalary <=99999) {NHIFDeductions = 1600;}
else if(grossSalary > 99999) {NHIFDeductions= 1700}
console.log("NHIFDeductions:", NHIFDeductions);

//Calculates NSSF Deductions.
let NSSFDeductions;
if(grossSalary > 0 && grossSalary <= 6000){
    NSSFDeductions = (grossSalary * 0.06);
}else if(grossSalary > 6000 && grossSalary <= 18000){
    NSSFDeductions = (360 + (grossSalary-6000) * 0.06);
}else if(grossSalary > 18000){
    NSSFDeductions = 1080;
}
console.log('NSSFDeductions:', NSSFDeductions)
const insuranceRelief = (NHIFDeductions* 0.15);
const taxablePay = grossSalary - NSSFDeductions;

//calculates Net Pay
let PAYE;
if(taxablePay >= 0 && taxablePay <= 24000){
    PAYE = ((taxablePay * 0.1) - personalRelief - insuranceRelief);
}else if(taxablePay > 24000 && taxablePay <= 32333){
    PAYE = ((taxablePay-24000) * 0.25) + ((24000 * 0.1)) - personalRelief - insuranceRelief;
}else if(taxablePay > 32333){
    PAYE = ((24000 * 0.1) + (8333 * 0.25) + ((taxablePay - 32333) * 0.3) - personalRelief - insuranceRelief);
} else {
    PAYE = "Enter a valid Salary";
}
if (PAYE < 0){
    PAYE = 0;
}
console.log('PAYE:', Math.floor(PAYE));
//Calculates net salary
netSalary = Math.floor(grossSalary-PAYE-NSSFDeductions-NHIFDeductions);
return netSalary;
}
console.log('netSalary:', IndividualNetSalaryCalculator());