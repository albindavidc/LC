
-----------------------------------------------------------------------------


//1295. Find numbers with even number of digits

var findNumbers = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i].toString().length) % 2 === 0) {
            count++;
        }
    }
    return count;
};

-----------------------------------------------------------------------------

//414. Third Maximum Number

var thirdMax = function (nums) {
    const numsValue = Array.from(new Set(nums));
    const sorted = numsValue.sort((a, b) => b - a)
    if (sorted.length >= 3) {
        return sorted[2]
    } else {
        return sorted[0]
    }
};

-----------------------------------------------------------------------------


//448. Find all numbers disappeared in an array

var findDisappearedNumbers = function(nums) {
    const length = nums.length;
    const  newSet = new Set(nums);
    const result = [];
    for(let i =1; i<=length; i++){
        if(!newSet.has(i)){
            result.push(i);
        }
    }
    return result
};


-----------------------------------------------------------------------------

// 747. Largest number atleast twice of others
var dominantIndex = function (nums) {
    const largestNum = Math.max(...nums)
    const indexLargestMax = nums.indexOf(largestNum)
    for (i = 0; i < nums.length; i++) {
        if (i !== indexLargestMax && largestNum < 2 * nums[i]) {

            return -1
        }
    }

    return indexLargestMax
};

-----------------------------------------------------------------------------

//724. Find Pivot Index

var pivotIndex = function (nums) {
    for (i = 0; i < nums.length; i++) {

        let leftSide = nums.slice(0, i)
        let rightSide = nums.slice(i+1)
        let leftSum = leftSide.reduce((acc, curr) =>  acc + curr, 0 )
        let rightSum = rightSide.reduce((acc, curr) =>  acc + curr, 0 )

        if (leftSum === rightSum) {
            return i
        }
    }
    return -1
};

-----------------------------------------------------------------------------

//350. Intersection of two arrays II
var intersect = function (nums1, nums2) {
    const numsMap = new Map();
    const intersectionArray = [];

    for(let i=0;i<nums1.length;i++){
        numsMap.set(nums1[i], (numsMap.get(nums1[i]) || 0) + 1)
    }

    for(let i=0; i<nums2.length;i++){
        if(numsMap.has(nums2[i]) && numsMap.get(nums2[i]) >0){
        intersectionArray.push(nums2[i])
        numsMap.set(nums2[i], numsMap.get(nums2[i]) -1)
        }
    }
    return intersectionArray
};

-----------------------------------------------------------------------------

//349. Intersection of Two Arrays
var intersection = function (nums1, nums2) {
    let intersectionEl = new Set();
    const nums1Val = new Set(nums1);
    for (i = 0; i < nums2.length; i++) {
        if (nums1Val.has(nums2[i])) {
            intersectionEl.add(nums2[i]);
        }
    }
    return Array.from(intersectionEl)
};

-----------------------------------------------------------------------------
//189.Rotate Array
var rotate = function(nums, k) {
    k = k % nums.length
    const splitIndex = nums.length - k

    function reverse(arr, start, end){
        while(start<=end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--
        }
    }
    reverse(nums, 0, nums.length-1)
    reverse(nums, 0, k-1)
    reverse(nums, k, nums.length-1)
};

-----------------------------------------------------------------------------


//282. Move Zeros
var moveZeroes = function (nums) {
    let index = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++
        }
    }

    for (i = index; i < nums.length; i++) {
        nums[i] = 0
    }
};

-----------------------------------------------------------------------------

//69. sqrt(x)
var mySqrt = function(x) {
    return Math.floor(x ** 0.5)
};

-----------------------------------------------------------------------------

//383.RansomNote
var canConstruct = function (ransomNote, magazine) {
    let magazineMap = new Map([]);

    for (const mag of magazine) {
        magazineMap.set(mag, (magazineMap.get(mag) || 0) + 1) ;
    }

    for (const char of ransomNote) {
        if(!magazineMap.has(char) || magazineMap.get(char) === 0){
            return false;
        }
            magazineMap.set( char, magazineMap.get(char) - 1)

        
    }
    return true;

};

-----------------------------------------------------------------------------

// 2951. Find the peaks
var findPeaks = function(mountain) {
    const peakIndex = [];

    for(i=1;i<mountain.length-1; i++){
        if(mountain[i] > mountain[i+1] && mountain[i] > mountain[i-1]){
            peakIndex.push(i)
        }

    }
    return peakIndex
};

-----------------------------------------------------------------------------

//121. Best time to buy and sell stock

var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }else{
            maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        }
    }
    return maxProfit;
};

-----------------------------------------------------------------------------

//169.Majority Elements

var majorityElement = function (nums) {
    let n = nums.length;
    let newMap = new Map();
    for (num of nums) {
        if (newMap.has(num)) {
            newMap.set(num, (newMap.get(num))+1);

        } else {
            newMap.set(num,1);
        }
    }

    for(let[key,value] of newMap){
        if(value> Math.floor(n/2)){
            return key;
        }
    }

    return null;

};


-----------------------------------------------------------------------------

//1952. Three Divisors
function isThree(n) {
    // Function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    // Check if n is a perfect square
    const sqrtN = Math.sqrt(n);
    if (sqrtN % 1 !== 0) return false; // Not a perfect square

    // Check if sqrtN is a prime number
    return isPrime(sqrtN);
}

-----------------------------------------------------------------------------


//1614. Maximum nesting depth of paranthesis

var maxDepth = function(s) {
    let currDepth = 0;
    let maxDepth = 0;

    for(char of s){
        switch (char){
            case "(":
            currDepth++;
            if(currDepth>maxDepth){
                maxDepth++;
            }
            break;
            case ")":
            currDepth--;
            break;
            default:
            break;
        }
    }
    return maxDepth;
};

-----------------------------------------------------------------------------

//3028. Ant on the boundary

var returnToBoundaryCount = function(nums) {
    let count = 0;
    let sum = 0;
    for(let num of nums){
        sum += num;
        if(sum === 0){
            count++;
        }
    }
    return count;
};

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