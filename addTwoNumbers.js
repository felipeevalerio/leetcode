/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Percorrer todos os elementos do vetor e verificar se o i + j

const twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        for(let j= i + 1; j<nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i , j]
            }
        }
    }
};

const nums = [3,2,3];
const target = 6;

console.log(twoSum(nums, target));