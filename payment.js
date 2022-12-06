//prompt function to ask for input on terminal
const prompt = require('prompt-sync')();

//prompt a user to input basic salary data on terminal
const basicSalary = parseInt(prompt("Please enter your basic salary : "));

//prompt a user to input benefits data on terminal
const benefits =parseInt(prompt("Please enter your total benefits: "));

//prompt a user to input pensionable pay data on terminal
const pensionablePay = parseInt(prompt("Please enter your pensionable pay: "));

//Function ('payeeCalculator()') to determine payee
function payeeCalculator() {

    if(basicSalary <= 24,000) {
        console.log("Your PAYEE is: ", basicSalary * 0.1);
    }

    else if(basicSalary >= 24,001 && basicSalary <= 32,333){
        console.log("Your PAYEE is: ", basicSalary * 0.25);
    }

    else {
        console.log("Your PAYEE is: ", basicSalary * 0.3)
    }
}
//function to calculate NHIF deductions
function nhifDeductionsCalculator() {
    //If statements nhif deducated from the basic salary
    if(basicSalary <= 5,999) {
        console.log("Your NHIF deductions are: ", 150);
    }

    else if(basicSalary >= 6,000 && basicSalary <= 7,999) {
        console.log("Your NHIF deductions are: ", 300);
    }

    else if(basicSalary >= 8,000 && basicSalary <= 11,999) {
        console.log("Your NHIF deductions are: ", 400);
    }

    else if(basicSalary >= 12,000 && basicSalary <= 14,999) {
        console.log("Your NHIF deductions are: ", 500);
    }

    else if(basicSalary >= 15,000 && basicSalary <= 19,999) {
        console.log("Your NHIF deductions are: ", 600);
    }

    else if(basicSalary >= 20,000 && basicSalary <= 24,999) {
        console.log("Your NHIF deductions are: ", 750);
    }

    else if(basicSalary >= 25,000 && basicSalary <= 29,999) {
        console.log("Your NHIF deductions are: ", 850);
    }

    else if(basicSalary >= 30,000 && basicSalary <= 34,999) {
        console.log("Your NHIF deductions are: ", 900);
    }

    else if(basicSalary >= 35,000 && basicSalary <= 39,999) {
        console.log("Your NHIF deductions are: ", 950);
    }

    else if(basicSalary >= 40,000 && basicSalary <= 44,999) {
        console.log("Your NHIF deductions are: ", 1000);
    }

    else if(basicSalary >= 45,000 && basicSalary <= 49,999) {
        console.log("Your NHIF deductions are: ", 1,100);
    }

    else if(basicSalary >= 50,000 && basicSalary <= 59,999) {
        console.log("Your NHIF deductions are: ", 1,200);
    }

    else if(basicSalary >= 60,000 && basicSalary <= 69,999) {
        console.log("Your NHIF deductions are: ", 1,300);
    }

    else if(basicSalary >= 70,000 && basicSalary <= 79,999) {
        console.log("Your NHIF deductions are: ", 1,400);
    }

    else if(basicSalary >= 80,000 && basicSalary <= 89,999) {
        console.log("Your NHIF deductions are: ", 1,500);
    }

    else if(basicSalary >= 90,000 && basicSalary <= 99,999) {
        console.log("Your NHIF deductions are: ", 1,600);
    }

    else {
        console.log("Your NHIF deductions are: ", 1,700);
    }
}


//function to calculate gross salary
function grossSalary() {

    const gross = basicSalary + benefits;
    console.log("Your Gross Salary is: ", gross);

}


//function to calculate nssf deductions
function nssfDeductionsCalculator() {

    const nssfDeductionsCalculator = pensionablePay / 0.06;
    console.log("You nssf deductions are: ", nssfDeductionsCalculator);

}


//function to calculate net salary
function netSalary() {
    const net = parseInt((basicSalary - payeeCalculator - nssfDeductionsCalculator - nhifDeductionsCalculator) + benefits);
    console.log("Your net salary is: ", net);
}


//calling the functions
payeeCalculator();
nhifDeductionsCalculator();
nssfDeductionsCalculator();
grossSalary();
netSalary();