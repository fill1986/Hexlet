const goldTicket=(ticketNumber)=>{
    ticketNumber=String(ticketNumber);
    if(ticketNumber.length%2!=0){return false}
   
     const sumPart=(start, end)=>{
       let sumPart=0;
       for(let i=start; i<end;i++){
        sumPart+=Number(ticketNumber[i]);
      }
      
      return sumPart;
     };
   
   let sumFirstPart=sumPart(0, ticketNumber.length/2);
   let sumSecondPart=sumPart(ticketNumber.length/2, ticketNumber.length);
   
   //console.log(`First  ${sumFirstPart} Second ${sumSecondPart}`);
   if (sumFirstPart==sumSecondPart){return true}
   return false;
}

console.log(goldTicket(717777));