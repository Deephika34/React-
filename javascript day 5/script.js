// Task 1
class Preson {
    constructor(name,age,gender,maritalStatus,contact,Email){
        this.name = name
        this.age = age
        this.gender = gender
        this.maritalStatus = maritalStatus
        this.contact = contact
        this.Email = Email
    }
}
const person1 = new Preson("john",77,"male","married",9876543210,"john2000@gmail.com");
const susi = new Preson("susi",23,"male","single",9876543210,"susisusisusi@gmail.com");
console.log(person1.name,person1.age,person1.gender,person1.maritalStatus,person1.contact,person1.Email);
console.log(susi);
console.log("-----------------------------------------------------------");

//Task 2

class UberPrice{
    constructor(distance,price=50){
        this.distance = distance
        this.price = price
    }
    set Price(p){
        this.price = p;
    }
    get Price(){
        return this.price;
    }
    set Distace(d){
        this.distance = d;
    }
    get Distace(){
        return this.distance;
    }
    get RidePrice(){
        return this.distance * this.price;
    }
}
const ride1 = new UberPrice(11,37);
const ride2 = new UberPrice(36,43);
const ride3 = new UberPrice(10);

console.log(ride1.RidePrice);
console.log(ride2.RidePrice);
console.log(ride3.RidePrice);