
-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------


//3131. Find the integer added to array one

var addedInteger = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let j = nums2[0] - nums1[0];

    for (i = 0; i < nums1.length; i++) {
        if (nums1[i] + j === nums2[i]) {
            return j;
        }
        return j;
    }
};

-----------------------------------------------------------------------------

//1662. Check if two array strings are equalent

var arrayStringsAreEqual = function(word1, word2) {
    word1 = word1.join("");
    word2 = word2.join("");
    return word1 === word2;
};

-----------------------------------------------------------------------------

//744. Find smallest letter greater than target

var nextGreatestLetter = function (letters, target) {
    for (let char of letters) {
        if (char > target) {
            return result = char;
        }
    }
    return letters[0];
};

console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));

-----------------------------------------------------------------------------

//2011. Final value of Variables After Performing Operations

var finalValueAfterOperations = function (operations) {
    count = 0;
    for (let i = 0; i <= operations.length; i++) {
        switch (operations[i]) {
            case "++X":
            case "X++":
                count++;
                break;
            case "--X":
            case "X--":
                count--;
                break;
            default:
                console.log("You have entered wrong operation");

        }
    }
    return count;
};

let operations = ["--X", "X++", "X++"];

console.log(finalValueAfterOperations(operations));

-----------------------------------------------------------------------------

// 2455. Average value of even numbers that are divisible by 3

var averageValue = function(nums) {
    let getEven = nums.filter(num => num%2 ===0);
    let getMult3 = getEven.filter(num => num%3 ===0);
    let sum = getMult3.reduce((acc, curVal) => acc+curVal, 0);
    return getMult3.length>0 ? Math.floor(sum/getMult3.length) :0 ; 
    
};

let num = [1,3,6,10,12,15];
console.log(averageValue(num));