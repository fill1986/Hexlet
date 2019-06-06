
const getSum=(n)=>{
  let strLength=String(n);
  let sum=0;
 
   for(let i=0;i<=strLength.length-1;i++){
    if(i==n.length){return sum;}
       sum+=Number(strLength[i]);
   }
    return String(sum);
};

const addDigits=(n)=>{
  let strLength=String(n);
 
while(strLength.length!==1){
  console.log(strLength);
    strLength=getSum(strLength);
}
  return Number(strLength);
};

let test=addDigits(1259);
console.log(test);
