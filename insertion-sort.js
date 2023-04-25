let nums = [3, 1, 2, 4, 0];
console.log(nums);
for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    console.log('loooping again')
    let numberToInsert = nums[i]
    console.log(numberToInsert, 'is being inserted into the nums j slot')

    for (j; nums[j] > numberToInsert && j >= 0; j--) {
        nums[j + 1] = nums[j]
        console.log(nums[j + 1], 'is being moved to nums I slot')
    }

    nums[j + 1] = numberToInsert;
    console.log(nums);
}