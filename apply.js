const apply=(n, f, arg)=>{let i=0, acc=0;
    while(i<n){
      console.log('while '+i);
      acc+=f(arg); 
      i++;}

      return acc;
  };

console.log(apply(2, Math.sqrt, 16));