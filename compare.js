

const getCountUpSymbol=(str)=>{
    let countStr=0;
    for(let i=0;i<str.length;i++){
       if(str[i].toUpperCase()==str[i]&&str[i]!==" "){
           countStr++;
       } 
    }
    return countStr;
};

const greaterThan=(str1,str2)=>{
    let countUpstr1=getCountUpSymbol(str1);
    let countUpstr2=getCountUpSymbol(str2);
    if (countUpstr1>countUpstr2){return 1;}
    if (countUpstr2>countUpstr1){return -1;}
    return 0;
};

const lessThan=(str1,str2)=>{
    let countUpstr1=getCountUpSymbol(str1);
    let countUpstr2=getCountUpSymbol(str2);
    if (countUpstr1>countUpstr2){return 1;}
    if (countUpstr2>countUpstr1){return -1;}
    return 0;
};

const isEqual=(str1, str2)=>{
    let countUpstr1=getCountUpSymbol(str1);
    let countUpstr2=getCountUpSymbol(str2);
    if (countUpstr1===countUpstr2){return 1;}
    return 0;
};


let myTest=isEqual('az', 'ad');
console.log(myTest);


