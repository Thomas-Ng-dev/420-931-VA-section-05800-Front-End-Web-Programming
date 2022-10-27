// Assignment 3 (part a)

// 1 - Add two integers

let addTwoIntegers = (value1, value2) =>
{
    return value1 + value2
}
console.log("Question 1: " + addTwoIntegers(1, 1))

// 2 - Sort an array

let concatAndSort = (array1, array2) =>
{
    return arraySorted = array1.concat(array2).sort()
}
const numArray1 = [1, 2, 4]
const numArray2 = [3, 5]
console.log("Question 2: " + concatAndSort(numArray1, numArray2))

// 3 - Sort the array and return the min and second max value

let minAndSecondMax = (array) =>
{
    array.sort();
    console.log("Question 3: Smallest element: " + array[0] + ", Second largest element: " + array[array.length - 2])
}
const numArray3 = [2, 4, 6, 1, 5]
minAndSecondMax(numArray3)

// 4 - Replace every uppercase letters in a string into lowercase

let toLowerCase = (string) =>
{
    return string.toLowerCase()
}
let example = "ApPle"
// AppPle -> Apple ??? should be apple?
console.log("Question 4: " + toLowerCase(example))

// 5 - Remove duplicates from a sorted array

let removeDuplicates = (array) =>
{
    let noDuplicates = [...new Set(array)]

    return noDuplicates
}
const numArray4 = [1, 2, 3, 3, 3, 4, 5, 5]
console.log("Question 5: " + removeDuplicates(numArray4))