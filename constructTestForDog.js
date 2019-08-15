function Dog(name, breed, weigth){
    this.name=name;
    this.breed=breed;
    this.weigth=weigth;
}

var Doggy=new Dog('Doggy', 'pitbull', 15);
var Bony=new Dog('Bony', 'pudel', 8);
var Pet= new Dog('Pet', 'ovchar', 12);

var dogs=[Doggy, Bony, Pet];

for(let i=0; i<dogs.length;i++){
    var size='small';
    if(dogs[i].weigth>10){
        size='big';
    }
console.log(`Dog ${dogs[i].name} is ${size} ${dogs[i].breed}`);
}
