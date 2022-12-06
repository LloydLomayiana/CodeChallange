const prompt = require('prompt-sync')();

//prompt a user to input data
const marks = parseInt(prompt('Enter a value between 0 and 100: '));

//Function to generate student grade
function studentGradeGenerator() {

    //else if statement to output grade that corresponds to the marks added
    if(marks >= 79 && marks < 100) {
        console.log("Grade: A");
    }
    
    else if(marks <= 79 && marks >= 60) {
        console.log("Grade: B");
    }

    else if(marks <= 59 && marks >= 49) {
        console.log("Grade: c");
    }

    else if(marks < 49 && marks >= 40) {
        console.log("Grade: D");
    }

    else if(marks > 0 && marks < 40){
        console.log("Grade: E");
    }

    else {
        console.log("Invalid marks")
    }

}

//calling  the function
studentGradeGenerator();

//Function to generate student grade
function speedDetector() {

    //Return an instance of the prompt function
    const prompt = require('prompt-sync')();

    //prompt a user to input data
    const speed = parseInt(prompt("Please Enter Car Speed: "));

    //declaring variables
    const speedLimit = 70;
    const kmPerPoint = 5;

    //Calculating the total number of demerit points.
    const points = Math.floor((speed - speedLimit)/kmPerPoint);

     //else if statement to check car speed 
    if(speed < 70) {
        console.log("Ok");
    }

    else if(points >= 12) {
        console.log("License suspended");
    }

    else {
        console.log("The total number of demerit points is: ", points);
    }
}
