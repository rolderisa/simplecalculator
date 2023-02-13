function add(nums){
    let sum=0;
    for(i=0;i<nums.length;i++){
      
        sum += nums[i];
    }
    return sum;
}

//multiplication
function product(nums){
    let product=1;
    for(i=0;i<nums.length;i++){
        product *= nums[i];
    }
    return product;
}
//to be able to use the function
module.exports={
add,
product,
}
