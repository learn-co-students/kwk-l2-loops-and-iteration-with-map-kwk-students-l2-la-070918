// Code your solution in this file.
function lowerCased(str){
  return str.toLowerCase();
}
function lowerCaseStudentNames(students){
  return students.map(lowerCased);
}
function separateName(studentName){
  var arrOfNames = studentName.split(' ');
  var attributes = {
    firstName: arrOfNames[0],
    lastName: arrOfNames[1]
  } 
  return attributes;
}
function nameToAttributes(students){ // sofia checked this is right
  return students.map(separateName);
}
function phrased(object){
  return `${object.name} is from ${object.hometown}`;
}
function attributesToPhrase(arrOfObjects){ // melany checked this is right
  return arrOfObjects.map(phrased);
}
console.log(attributesToPhrase([{ name: 'Mary',   hometown: 'Allegheny'  },
  { name: 'Joan',   hometown: 'Chicago'    },
  { name: 'Eva',   hometown: 'Hamburg'   }]))
  
