let passngers=[
    {name:'Evgeny', paid: true, class:"1"},
    {name: "Vova", paid: true, class:"2"},
    {name: "Zlo", paid: true, class:"2"},
    {name:"Gera" , paid: false, class:"2"}
];

const lookingPassanger=(passngers, functionForCheak)=>{
    for(let i=0; i<passngers.length;i++){
       if (functionForCheak(passngers[i])){return false;}
    }
    return true;
};

const blackList=(passnger)=>{
    return (passngers.name==='Zlo');
};

const checkNoPaid=(passnger)=>{
    return (!passnger.paid);
};

const printPassanger=(passnger)=>{
    console.log(passnger.name);
};

const cheakRedyFly=()=>{
    let allCanFly=lookingPassanger(passngers, blackList);
    if (allCanFly){
        console.log("The plane can't take off: we have a passger from BlackList");
    }

    let allPaid=lookingPassanger(passngers, checkNoPaid);
    if (!allPaid){
        console.log("The plane can't take off:not everyone has paid");
    }

};

// переделать для возврата функции
/*
const DrinkOrder=(passnger)=>{
    let drinks='';
    const orderFunction=()=>{console.log(`Do you wanna ${drinks} ${passnger.class}`);};
    if (passngers.class=="first"){
       drinks='coffe or jin';
    } else {drinks= 'water or tea?';
}

return orderFunction;
};*/

const DrinkOrder=(passnger)=>{
    const orderFunction=(availebleDrinks)=>{console.log(availebleDrinks);};
    if (passngers.class=="1"){
     orderFunction('coffe or jin');
    } else {orderFunction('water or tea');
}

return orderFunction;
};


const serveCustomer=(passnger)=>{
  const getDrinlOrderFunction=()=>DrinkOrder(passnger);
    getDrinlOrderFunction();
// do something else
    getDrinlOrderFunction();
// do something else
    getDrinlOrderFunction();
};


cheakRedyFly();
lookingPassanger(passngers,printPassanger);

serveCustomer(passngers[0]);