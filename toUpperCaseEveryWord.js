const solution=(str)=>{
    let strLength=str.length-1;
    for(let i=0;i<=strLength;i++){
        if(i==0){str[i]=str[i].toUpperCase;}
        if(str[i]==" "){str[i+1]=str[i+1].toUpperCase;}
    }
    return str;
};

console.log(solution('hello, world!'));