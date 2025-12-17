var numbers= [];

for(var i = 1; i <= 5; i++){
var userInput = prompt("Enter number " + i);
numbers.push(i); 

}

console.log(numbers);

for(var i = 0; i< numbers.length; i++){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i]+" is even number.");
    }
    else{
        console.log(numbers[i]+" is odd number.");
    }
}