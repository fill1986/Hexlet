const solution=(str)=>{
    let strLength=str.length-1;
    let modifedStr="";

   for(let i=0;i<=strLength;i++){
      if(i==0){modifedStr+=str[i].toUpperCase(); continue;}
      if(str[i-1]==" "){modifedStr+=str[i].toUpperCase(); continue;}
      modifedStr+=str[i];
     }
  return modifedStr;
};

let test=solution('hello, world!');
console.log(test);