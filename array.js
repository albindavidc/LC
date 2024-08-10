














2455. Average value of even numbers that are divisible by 3

var averageValue = function(nums) {
    let getEven = nums.filter(num => num%2 ===0);
    let getMult3 = getEven.filter(num => num%3 ===0);
    let sum = getMult3.reduce((acc, curVal) => acc+curVal, 0);
    return getMult3.length>0 ? Math.floor(sum/getMult3.length) :0 ; 
    
};

let num = [1,3,6,10,12,15];
console.log(averageValue(num));