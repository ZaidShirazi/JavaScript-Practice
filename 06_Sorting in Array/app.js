
var array = []; // Empty Array declaration

var range;

range = +prompt("Enter a range: ");

for(var i = 0; i<=range; i++) {
    array[i] = +prompt("Enter Number "+ i +": ");
}

// Unsorted Array

console.log(array);

for(var i = 0; i<array.length; i++)
{
    for(var j = i+1; j<array.length; j++)
    {
        if(array[i]>array[j])
        {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

console.log("Sorted Array: "+ array);