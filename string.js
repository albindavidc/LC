//1. Two Sum

let twoSum = function (nums, target){
    for(i=0;i< nums.length;i++){git 
        for(j=i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
} 

//eg:
let num1 = [2,7,11,15];
console.log(twoSum(num1, 9));

let num2 = [3,2,4];
console.log(twoSum(num2, 6));

let num3 = [3,3];
console.log(twoSum(num3, 6));