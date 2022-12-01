//Challenge 3: Net Salary Calculator (Toy Problem).
/*This challenge involves creating a program that allows basic salary and benefits and adds them to get gross salary, 
then calculates PAYE,NSSF and NHIF then deducts them from gross salary to get net salary.*/

//This code allows the user to input basic salary and benefits.
const prompt = require("prompt-sync")();
let basicSalary = parseInt(prompt("Enter the basic salary: "));
let benefits = parseInt(prompt("Enter your benefits: "));

//This function calculates and prints NHIF, NSSF, and PAYE deductions and subtracts them from gross salary to output net salary.
function netSalaryCalculator() {
    let grossSalary = basicSalary + benefits;
    const personalRelief = 2400;
//calculates NHIF deductions.
    let NHIFDeductions;
    if(grossSalary >= 0 && grossSalary <= 5999){(NHIF = 150);}
    else if(grossSalary > 5999 && grossSalary <= 7999){(NHIFDeductions = 30);}
    else if(grossSalary > 7999 && grossSalary <= 11999){(NHIFDeductions = 400);}
    else if(grossSalary > 11999 && grossSalary <= 14999){(NHIFDeductions = 500);}
    else if(grossSalary > 14999 && grossSalary <= 19999){(NHIFDeductions = 600);}
    else if(grossSalary > 19999 && grossSalary <= 24999){(NHIFDeductions = 750);}
    else if(grossSalary > 24999 && grossSalary <= 29999){(NHIFDeductions = 850);}
    else if(grossSalary > 29999 && grossSalary <= 34999){(NHIFDeductions = 900);}
    else if(grossSalary > 34999 && grossSalary <= 39999){(NHIFDeductions = 950);}
    else if(grossSalary > 39999 && grossSalary <= 44999){(NHIFDeductions = 1000);}
    else if(grossSalary > 44999 && grossSalary <= 49999){(NHIFDeductions = 1100);}
    else if(grossSalary > 49999 && grossSalary <= 59999){(NHIFDeductions = 1200);}
    else if(grossSalary > 59999 && grossSalary <= 69999){(NHIFDeductions = 1300);}
    else if(grossSalary > 69999 && grossSalary <= 79999){(NHIFDeductions = 1400);}
    else if(grossSalary > 79999 && grossSalary <= 89999){(NHIFDeductions = 1500);}
    else if(grossSalary > 89999 && grossSalary <= 99999){(NHIFDeductions = 1600);}
    else if(grossSalary > 99999){(NHIFDeductions = 1700);}
    else {
        NHIFDeductions = "Please enter a valid salary";
    }
    console.log("NHIFDeductions:", NHIFDeductions);

    //calculates NSSF deductions.
    let NSSFDeductions;
    if(grossSalary > 0 && grossSalary <= 6000){NSSFDeductions = (grossSalary * 0.06);}
    else if(grossSalary > 6000 && grossSalary <= 18000){NSSFDeductions = (360 + (grossSalary-6000) * 0.06);}
    else if(grossSalary > 18000){NSSFDeductions = 1080;}
   
    console.log("NSSFDeductions:", NSSFDeductions);
    const insuranceRelief = NHIFDeductions * 0.15;
    const taxablePay = grossSalary - NSSFDeductions;
    
    //Calculates PAYE.
    let PAYE;
    if(taxablePay >= 0 && taxablePay <= 24000){
        PAYE = ((taxablePay * 0.1) - personalRelief - insuranceRelief);}
    else if(taxablePay > 24000 && taxablePay <= 32333){
        PAYE = ((taxablePay-24000) * 0.25) + ((24000 * 0.1)) - personalRelief - insuranceRelief;}
    else if(taxablePay > 32333){
        PAYE = ((24000 * 0.1) + (8333 * 0.25) + ((taxablePay - 32333) * 0.3) - personalRelief - insuranceRelief);}
    else{
        PAYE = "Enter a valid Salary";
    }
    if (PAYE < 0){
        PAYE = 0;
    }
    console.log("PAYE:", (Math.floor(PAYE)));

    //calculates netSalary
    netSalary = Math.floor(grossSalary-PAYE-NSSFDeductions-NHIFDeductions);
    return netSalary;
}

//Prints out the netSalary.
console.log("netSalary:", (netSalaryCalculator()));