const substr=(str,start=0,end=str.length-1)=>{
    if (str.length===0){return "' '";}
    else if (start<0 && end>0){start=0; if(end>=str.length){end=str.length-1;console.log(end)} if(end<str.length){end-=1;} }
    else if (start<0){start=0;}
    else if (end<0){end=1;}
    else if(end>str.length-1){end=str.length-1;}
    else if(end===1){return str[start];}
    
    else if(end===0 || start>end){return "' '";}
    let subsStr="";
    for(let i=start;i<=end;i++){
        subsStr+=str[i];
    }
    return subsStr;
};

console.log(substr('abba', 0, 1));    // => a
console.log(substr('abba', 1, 2));    // => bb
console.log(substr('abba', -10, 2));  // => ab
console.log(substr('abba', -1, 100)); // => abba
console.log(substr('abba', -1, -1));  // => a
console.log(substr('abba', 1, -10));  // => b
console.log(substr('abba', 1, 10));   // => bba
console.log(substr('abba', 1, 0));    // => ''
console.log(substr('abba', 100, 3));  // => ''
console.log(substr('', 1, 0));  // => ''