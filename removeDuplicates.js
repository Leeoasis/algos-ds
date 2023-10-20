var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0; // If the array is empty, there are no duplicates.
    }
    
    let j = 0; // Pointer for unique elements
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i]; // Update the unique element at pointer j
        }
    }
    
    return j + 1; // Number of unique elements
};
