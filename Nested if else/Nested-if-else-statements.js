let CNIC,eyetest,learning_license;

console.log("Welcome to Driving License Verification!");

CNIC = prompt("Do You have CNIC (Yes/No): ").toLowerCase();

if(CNIC === "yes"){
  eyetest = prompt ("Do you clear your eyetest? (Yes/No): ").toLowerCase();
  learning_license = prompt("Do you have learning license? (Yes/No): ").toLowerCase();

  if (learning_license === "yes" && eyetest === "yes") {
    
    console.log("You are eligible to apply Permanent License ! ");
  }
  else {
    console.log("Oops! You must clear an eyetest and have a learning license.");
  }
}
else {
  console.log("Sorry. please make your CNIC first.");
}