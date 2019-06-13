const substr=(str, start=0, end=str.length)=>{
   let subStr="";

   start=(start<0)?0:(start>str.length)?NaN:start;
   end=(start>=1&&end>str.length-1)?str.length-1:(end>str.length-1)?str.length:(end<0)?1:end;
   let length=(start===0&&end!=1)?end:(start>=1&&end>0)?end+1:(end===0)?NaN:(end==1)?1:end;


    for(let i=start;i<length;i++){
         subStr+=str[i];    
    }
    //console.log("start "+start+ " end "+end+" length "+length);
    return subStr;
};


console.log(substr('abba', 1, 2));    // => bb
console.log(substr('abba', -10, 2));  // => ab
console.log(substr('abba', -1, 100)); // => abba
console.log(substr('abba', -1, -1));  // => a
console.log(substr('abba', 1, -10));  // => b
console.log(substr('abba', 1, 100));   // => bba
console.log(substr('abba', 1, 0));    // => ''
console.log(substr('abba', 100, 3));  // => ''
console.log(substr('', 1, 0));  // => ''