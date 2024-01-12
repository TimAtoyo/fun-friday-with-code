// Here are five common JavaScript algorithm questions that are often asked in job interviews:

//     Reverse a String: Write a function that takes a string as input and returns the string reversed. For example, if the input is "hello," the output should be "olleh."

var str = "Detartrated";
function reverseString(str) {
  // Your code here
  var splitWords = str.split("").toReversed().join("").toLowerCase();
  console.log(splitWords);
  return splitWords;
}

// reverseString(str)

// Palindrome Check: Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward.

function isPalindrome(str) {
  // Your code here
  var reversedString = reverseString(str);

  if (reversedString === str.toLowerCase()) {
    console.log(`Is a palendrome my gy`);
  } else {
    console.log(`Is Not a palendrome my gy`);
  }
}
isPalindrome(str);

// FizzBuzz: Write a program that prints the numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."

//     function fizzBuzz() {
//       // Your code here
//     }

//     Find the Missing Number: Given an array containing n distinct numbers taken from the range 0 to n, find the one missing from the array.

//     function findMissingNumber(nums) {
//       // Your code here
//     }

//     Two Sum: Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

//     function twoSum(nums, target) {
//       // Your code here
//     }

// These questions cover a range of algorithmic concepts and are commonly used to assess problem-solving skills and understanding of basic data structures in JavaScript during job interviews.
