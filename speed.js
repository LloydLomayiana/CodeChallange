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

//calling the function
speedDetector();