
const isPalindrome=(str)=>{
    if (str.length<=1){return true;}

    let firstSymbol=str[0];
    let lastSymbol=str[str.length-1];

    if(firstSymbol!==lastSymbol){console.log(firstSymbol+" "+lastSymbol);return false;}

    let newStrWitoutFirstLast=str.substring(1,lastSymbol-1);

    return isPalindrome(newStrWitoutFirstLast);


};


console.log(isPalindrome('radar')); // => true
console.log(isPalindrome('a'));     // => true
console.log(isPalindrome('abs'));   // => false
console.log(isPalindrome('aa'));   // => false