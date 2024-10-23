
-----------------------------------------------------------------------------

//205. Isomorphic Strings

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {

        if (mapS.has(s[i]) && mapS.get(s[i]) !== t[i]) {
            return false;
        }

        if (mapT.has(t[i]) && mapT.get(t[i]) !== s[i]) {
            return false;
        }

        mapS.set(s[i], t[i])
        mapT.set(t[i], s[i])

    }
    return true
};

-----------------------------------------------------------------------------

//415. Add Strings


var addStrings = function (num1, num2) {
    let carry = 0;
    let result = '';
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        let digit1 = i >= 0 ? Number(num1[i]) : 0;
        let digit2 = j >= 0 ? Number(num2[j]) : 0;

        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;

        i--;
        j--;

    }
    return result;

};

-----------------------------------------------------------------------------

//387. First Unique Character in a String

var firstUniqChar = function(s) {
    let result = {};

    for(let i = 0; i<s.length;i++){
        result[s[i]] = (result[s[i]] || 0) +1;
    }
    for(let i=0; i<s.length;i++){
        if(result[s[i]] === 1){
            return i
        }
    }
    return -1
};


-----------------------------------------------------------------------------

// 7. Reverse Integer

var reverse = function(x) {
    let result =0;
    let isNegative = x < 0;
    let maxInt = Math.pow(2, 31)-1
    x = Math.abs(x)

    while(x>0){
        let lastDigit = x%10;
        result = result*10 + lastDigit
        x = Math.floor(x/10);

        if(result > maxInt){
            return 0
        }
    }

    return isNegative ? -result : result;

};

-----------------------------------------------------------------------------

// 392. Is subsequence

var isSubsequence = function(s, t) {
    let i =0, j =0;

    while(i< s.length && j<t.length){
        if(s[i] === t[j]){
            i++
        }
        j++
    }
    return i=== s.length
};


-----------------------------------------------------------------------------


//242. Valid Anagram

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    const newMap = new Map();

    for(i=0;i<s.length;i++){
        newMap.set(s[i], (newMap.get(s[i]) || 0) + 1)

    }
    
    for(i =0; i<t.length;i++){
        if(!newMap.has(t[i])){
            return false;
        }

        newMap.set(t[i], (newMap.get(t[i]) || 0) -1)
        if(newMap.get(t[i]) === 0){
        newMap.delete(t[i]);   
        }
    }

    return newMap.size === 0;

};

-----------------------------------------------------------------------------

// 28. Find the index of first occurence in a string

var strStr = function(haystack, needle) {
    
    let needleLength = needle.length;
    needleLength === '' ? -1: needleLength;
    let haystackLength = haystack.length;

    for(i=0; i<=haystackLength - needleLength; i++){
        let sliceHaystack = haystack.slice(i, i+needleLength);

        if(sliceHaystack === needle){
            return i
        }
    }

    return -1;
    
};

-----------------------------------------------------------------------------

//125. Valid Palindrome

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    const joinS = s.split('').reverse().join('');
    return s === joinS
};

-----------------------------------------------------------------------------

//709. To Lower Case

var toLowerCase = function(s) {
    return s.toLowerCase();
};


-----------------------------------------------------------------------------

//3110. Score of a string

var scoreOfString = function(s) {
    let score = 0;

    for(i=0;i<s.length-1;i++){
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1))
    }
    return score;
};

-----------------------------------------------------------------------------

//507. Perfect Number

var checkPerfectNumber = function(num) {
    if(num<=1) return false;
    let sum = 1;

    for(i=2;i<=num/2;i++){
        if(num%i === 0){
            sum += i;
        }
    }
    return sum === num;
};

-----------------------------------------------------------------------------

//1108. Defanging IP Address

var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};


-----------------------------------------------------------------------------

//412. Fizz-Buzz
var fizzBuzz = function(n) {
    const arr = [];
    for(let i=1;i<=n;i++){
    if(i % 3 === 0 && i %5 === 0){
         arr.push("FizzBuzz");
    }else if(i % 3 === 0){
         arr.push("Fizz");
    }else if(i % 5 === 0){
         arr.push("Buzz");
    }else {
         arr.push(i.toString());
    }
    }
    return arr;
};

console.log(fizzBuzz(3));

-----------------------------------------------------------------------------

//1281. Subtract Product from Sum
var subtractProductAndSum = function(n) {
    
    let digit = n.toString().split("").map(Number);

    let product = digit.reduce((acc, currNum) => acc * currNum, 1);
    let sum = digit.reduce((acc, currNum) => acc + currNum, 0);
    return product - sum;
};
//eg:
console.log(subtractProductAndSum(345));

-----------------------------------------------------------------------------

//1. Two Sum
let twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        git;
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

//eg:
let num1 = [2, 7, 11, 15];
console.log(twoSum(num1, 9));

let num2 = [3, 2, 4];
console.log(twoSum(num2, 6));

let num3 = [3, 3];
console.log(twoSum(num3, 6));
