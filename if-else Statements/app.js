// if else Practice

// simple if else

    let age = 0;

    age = prompt("Enter your Age: ");

    if(age>=18){
        console.log("Congrats! You are eligible for driving test.")
    }
    else{
        console.log("You are not eligible for driving test.")
    }

// Nested if-else 

    let totalMarks, percentage, obtMarks;

    totalMarks= 800;

    obtMarks = prompt("Enter Obtained Marks: ");

    percentage = (obtMarks/totalMarks) * 100;

    if(isNaN(obtMarks) || obtMarks > totalMarks || obtMarks < 0) {
        console.log("Invalid Input!");
    }

    else{
        console.log("Percentage: " + percentage + "%");

        if(percentage>=90){
        console.log("Grade: A+");
        console.log("You Are Pass! Well Done!");
        }
        else if(percentage>=70){
            console.log("Grade: A");
            console.log("You Are Pass! Well Done!");
        }
        else if(percentage>=60){
            console.log("Grade: B");
            console.log("You Are Pass! Well Done!");
        }
        else if(percentage>=50){
            console.log("Grade: C");
            console.log("You Are Pass! Well Done!");
        }
        else if(percentage>=40){
            console.log("Grade: D");
            console.log("You Are Pass! Well Done!");
        }
        else{
            console.log("You are Fail! Don't give up! Try harder next time!");
        } 
    }       