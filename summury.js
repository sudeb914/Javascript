var tablelength = 12;//variable
var tourDestination = ["Paris", "London", "New York", "Rome", "Barcelona", "Amsterdam", "Berlin", "Madrid", "Rio de Janeiro", "Sydney", "Los Angeles", "Tokyo", "Seoul"];//array


console.log(tourDestination.indexOf("New York"));;//returns the index of the element
var fourthDestination = tourDestination[3];

tourDestination[2] = "San Francisco";
console.log(tourDestination);

tourDestination.push("Beijing");
console.log(tourDestination);

tourDestination.pop();

