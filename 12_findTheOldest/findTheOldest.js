

const findTheOldest = function(people) {

    const getAge=(death, birth) =>{
        if(death === undefined){
             death = new Date().getFullYear();
             return death - birth;
        }
        return death - birth;

    }
    let eldest = {
        name: "",
        age: 0
    };

    people.map((person)=>{
        let getAgeFunction = getAge(person.yearOfDeath, person.yearOfBirth);
        if(getAgeFunction > eldest.age && getAgeFunction!== undefined ){
            eldest = {
                name: person.name,
                age: getAgeFunction
            }
        }
        
    })
    return eldest;
}

// Do not edit below this line
module.exports = findTheOldest;
