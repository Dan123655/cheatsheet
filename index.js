const arr = [2,7,11,15]
var twoSum = (nums,target)=>{
    let m=new Map();
 for(let i=0;i<nums.length;i++){
     let n=nums[i];
     let s=target-n;
     if(m.has(s)){
         return [i,m.get(s)]}m.set(n,i)
 }
}

console.log(twoSum(arr, 9))