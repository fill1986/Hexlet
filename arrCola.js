let arrListCola=[
    {name:"Caoca", calories:150, color:"black", sold:500},
    {name:"greenCola", calories:150, color:"green", sold:600},
    {name:"Pepsi", calories:250, color:"red", sold:500},
    {name:"CoCi", calories:150, color:"black", sold:800},
    {name:"Fantasy", calories:350, color:"red", sold:700}
];

const compareSold=(cola1, cola2)=>{
    return ((cola1.sold>cola2.sold)?1:(cola1.sold==cola2.sold)?0:-1);
};

arrListCola.sort(compareSold);
console.log(arrListCola);