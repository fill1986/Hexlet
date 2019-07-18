const formattedTime=minuts=>{
  let hour=Math.floor(minuts/60);
  minuts=(hour<1)?minuts:(minuts-hour*60);

 if(hour<0){
   let clock=(String(minuts).length<2)?('00:0'+minuts):('00:'+minuts);
   return clock;
 }
 
 hour=(String(hour).length<2)?'0'+hour:hour;
 let clock=(String(minuts).length<2)?(hour+':0'+minuts):(hour+':'+minuts);
  
  return clock;
}
