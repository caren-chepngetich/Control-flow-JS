// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
function numbersInArray(numbers){
    let numbersIn1 = numbers.slice(0,4);
    let numbersIn2 = numbers.slice(-2);
    numbersIn1.forEach((i) => {
        console.log(i*i);
    });

    numbersIn2.forEach((j) =>{
        console.log(j + 10)
    });
}
numbersInArray([9,8,7,6,5,4,3,2]);
// Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
function iterateArray(numbers){
    while (i < numbers.length){
        console.log(numbers[i])
        if (numbers[i]=== numbers.length[3]){
            break;
        }
        i++
    }
}
iterateArray([1,2,3,4,5,6,7,8,9]);


// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruitsVarietes(fruits){
    for (let i = 0; i< fruits.length; i++) {
        if (i === 1){
        continue;
    }
    console.log(fruits[i]);
}
}
fruitsVarietes(['apple','plum','banana','strawberries','kiwi'])
// Write a function that accepts an array of strings and console.logs each element using a for loop.
function elementsInArray(array){
    for (let i = 0; i <array.length; i++){
        console.log(array[i]);
    }
}
elementsInArray(["Caren","Dan","Hazel","Hannah"])

// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 

function reverseString(string){
    let reversed = "";
    let i = string.length -1;
    while (i >= 0){
        reversed = string[i] + reversed;
        i--;
    }
    return reversed;
}

reverseString(["Caren"])