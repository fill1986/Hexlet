
const isPalindrome=(str)=>{
    if(str.length==1){return true;}
let i=0;
let j=str.length-1;


const recur=(i,j)=>{
    if(i==j){return true;}
    if(str[i]!==str[j]){return false;}
    i++;
    j--;
    return recur(i,j);
};

return recur(i,j);

};



console.log(isPalindrome('raradarar')); // => true
console.log(isPalindrome('a'));     // => true
console.log(isPalindrome('abs'));   // => false