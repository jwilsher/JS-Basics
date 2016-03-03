//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

function isTyler(name) {
	if (name === 'Tyler') {
		return true;
	}
	else {
		return false;
	}
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

 function getName() {
 	var result = prompt("What is your name?");
 	return result;
 }


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome()  {
	var response = getName();
	alert ("Welcome " + response);
}


//Next problem




//What is the difference between arguments and parameters?

  //Answer Here

//MY ANSWER: Arguments = the information you pass into the function
//           Paramters = the variable that is the placeholder for what gets put into the function when you declare it
//           function declaration = paramtert as a placeholder
//			 function invocation = pass in argument


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

//MY ANSWER: Falsey values = 1) NaN, 2) undefined, 3) null, 4) 0, 5) false, 6) ""
//			 You check if something is falsey if by...... !!(falsey value), which should evaluate to "false", or you could write..
				function checkIfFalsy(value) {
					if (!value) {
						return "falsy";
					}
				}				



//Next Problem



//Create a function called myName that returns your name

  //Code Here

 function myName() {
 	var name = "Jaclyn";
 	return name;
 }
  


//Now save the function definition of myName into a new variable called newMyName

  //Code Here

 var newMyName = myName;
 alert(newMyName());

//Now alert the result of invoking newMyName



//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

 function outerFn() {
 	return function() {
 		return "Jaclyn";
 	}
 }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

var innerFn = outerFn();
innerFn();

//Now invoke innerFn.
