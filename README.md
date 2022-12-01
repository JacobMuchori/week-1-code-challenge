# week-1-code-challenge

# Description
This code challenge contains:
 1.A function that outputs correct grades when student marks are input.
 2.A function that prints a certain message depending on the input speed of a car.
 3.A function that calculates an individuals net salary once the basic salary and benefits are input then added to get the gross salary, then the deductions are calculated and subtracted from the gross salary to get the net salary.It also displays the value of PAYE, NHIF and NSSF deductions.

# Installation
Open the terminal on your computer.
Clone the repo from github using:
  git clone https://github.com/JacobMuchori/week-1-code-challenge

Change directory into the repo folder:
  cd-week-1-code-challenge

Open it in ``Visual Studio Code``:
  code .

# Running the application
To run the application:

- First Install the dependencies:
  npm install

- Run the application:
  -node netSalaryCalculator.js -for netSalaryCalculator.js file,
  -node speedDetector.js -for speedDetector.js file,
  -node studentGradeGenerator.js - for studentGradeGenerator.js file,


# Project set up
  # Student Grade Generator(Toy Problem)
First, open the studentGradeGenerator.js file. Open the terminal in vscode and type the node command(node studentGradeGenerator.js ) to run the program. You will be prompted to input student marks so type the mark you want.After that, press enter and the giveGrades() function in the file, will compute a certain output grade for the value you input in the terminal when (node studentGradeGenerator.js) is run.This grade output changes as the mark input is changed.
 
  # Speed Detector(Toy Problem)
Navigate to the speedDetector.js file. Open the vscode terminal and type the node command (node speedDetector.js ) to run the program. When the command runs, you will be prompted to input speed.Once you have input speed and pressed enter, the function printReceipt() will run and give a certain output in our terminal.It will output "Ok" for speed below 70.For speed above 70, a demerit point will be awarded for every increment of five.Above 12 demerit points, the output will be "license suspended".

 # Net Salary Calculator(Toy Problem)
Navigate to the netSalaryCalculator.js file.Open the vscode terminal and type the node command(node netSalaryCalculator.js)to run this program.Once it runs,you will be prompted to input any value of basic salary and benefits for a salary.With the input, the function IndividualNetSalaryCalculator() will calculate the net salary the individual gets per month after deductions and output it.The funtion will also output NHIF,NSSF and PAYE deductions done to derive the net salary in the terminal.


# Details of Author
 This challenge was contributed by:
- [Jacob Muchori Kinyua](https://github.com/JacobMuchori)

# License
-[ISC]