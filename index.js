// Code your solution in this file.
function lowerCaseStudentNames (list) {
 return list.map(function (student) {
  return student.toLowerCase();
 });
}

function nameToAttributes(list){
  return list.map(function(driver) {
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];
    return {firstName: firstName, lastName: lastName};
  });
}
function attributesToPhrase(names){
  return names.map(function (driver){
  return `${driver.name} is from ${driver.hometown}`
  });
}