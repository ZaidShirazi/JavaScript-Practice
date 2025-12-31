var arr = [];
var range;

range = +prompt("Enter range of array: ");

for(var i = 0; i<range; i++)
{
  arr[i] = +prompt("Enter Number " + (i+1) + ": ");
}

console.log("Your Array is : ",arr)

//Swapping first and last element of an array

var temp = arr[0];
arr[0] = arr[arr.length-1];
arr[arr.length-1] = temp;

console.log("Swapped Array: ",arr);