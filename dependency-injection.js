class Pet {
    constructor(name, type){
        this.name = name;
        this.type = type;
        this.energy = 0;
    }

    feed = function(food){
        return this.energy += food;
    } 

    walk = () => {
        this.energy--;
    }

    static compareEnergy(pet1, pet2){
        var responseString = " has more energy!";
        if(pet1.energy > pet2.energy){
            return pet1.name += responseString;
        } else if(pet2.energy > pet1.energy){
            return pet2.name += responseString;
        } else 
            return "SAME ENERGY!!";
    }
}

class Dog extends Pet {
    constructor(name){
        super(name, "Dog");
    }    
}

class DogRepository {
    constructor(){
        this.Dogs = [];        
    }

    addDog = (dog) => {
        this.Dogs.push(dog);
    }

    getDogs = () => {
        return this.Dogs;
    }
}

class PetShop {
    constructor(dogRepository){
        this._dogRepository = dogRepository;        
        this.dogArr = [];
    }

    viewAdoptableDogs() {
        var dogs = this._dogRepository.getDogs();
        console.log("     /========\\");
        console.log("   /=============\\");
        console.log(" /=================\\");
        console.log("/====================\\");     
        console.log("=======================");
        dogs.forEach(dog => {
            this.dogArr.push(dog);
            console.log("||      " + dog.name);
        });
        console.log("=======================");        
    }

    feedAllDogs(howMuch) {
        this.dogArr.forEach(dog => {
            dog.feed(howMuch);
        });
    }

}


let dogRepo = new DogRepository();
dogRepo.addDog(new Dog("Rufus"));
dogRepo.addDog(new Dog("Scooter"));
dogRepo.addDog(new Dog("Cooper"));
dogRepo.addDog(new Dog("Scoobs"));

var myLittlePetShop = new PetShop(dogRepo);
myLittlePetShop.viewAdoptableDogs();
myLittlePetShop.feedAllDogs(5);
console.log(myLittlePetShop.dogArr[0]);
