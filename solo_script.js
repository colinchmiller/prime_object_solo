// ! ! !
// Three Bugs
//bug #1: line 22: calculateSTI(array) requires the [i] index to iterate through the arrays
//bug #2: line 69: basePercent should not be subtracted by 1
//bug #3: line 44: when reassigning the value of newArray[2] to the total of the bonus plus the base salary, needed to parseInt the value to round the result and put parenthesis around the 1 + bonus to override the order of operations

var objectAtticus = {name :"Atticus", employeeNumber: "2405", baseSalary: "47000", reviewScore: 3};
var objectJem = {name: "Jem", employeeNumber: "62347", baseSalary: "63500", reviewScore: 4};
var objectBoo = {name: "Boo", employeeNumber: "11435", baseSalary: "54000", reviewScore: 3};
var objectScout = {name: "Scout", employeeNumber: "6243", baseSalary: "74750", reviewScore: 5};

var array = [objectAtticus, objectJem, objectBoo, objectScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]); //BUG #1 need to add [i] to calculateSTI(array)
 	newEl = document.createElement('li');
  console.log("Here is the newEl list: ", newEl);
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];

//Taking each iteration of the array and assigning the associated object location
  newArray[0] = array.name;

  var employeeNumber = array.employeeNumber;
  var baseSalary = array.baseSalary;
  var reviewScore = array.reviewScore;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus)); //BUG #3 Need to parenthesize 1.0 + bonus to override order of operations and parseInt to round to whole number
  newArray[3] = baseSalary * bonus;
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; //BUG #2 Don't need to subtract by 1
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}