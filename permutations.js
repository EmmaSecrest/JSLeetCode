//Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// using recursion as a tree
var permute = function(nums) {
    const result = [] // global result

    //dfs recursive helper
    const dfs =(i,nums) =>{
        //base case
        if (i === nums.length){
            result.push(nums.slice())
            return;
        }

        //dfs recursive case
        // have to swap between i and j
        for(let j = i ; j < nums.length; j++){
            [nums[i] ,nums[j]] = [nums[j] ,nums[i]]; // swapping these 
            dfs(i+1,nums); // incrementing i 
            [nums[i] ,nums[j]] = [nums[j] ,nums[i]]; // reswapping as we go back up the tree 
        }
    }
    dfs(0,nums);
    return result;
};