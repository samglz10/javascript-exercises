const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


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
    return eldest
}
findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
