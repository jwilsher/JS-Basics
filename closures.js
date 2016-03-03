//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

var inner = outer();

//Once you do that, invoke inner.

  //Code Here

inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var callJake = callFriend();
callJake("435-215-9248");



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
function makeCounter() {
  var tracker = 0;
  return function() {
    tracker = tracker + 1;
    //return ++tracker;
    return tracker;
  }
}

  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'. 
  Write a second function named codeFriend that accepts the first function as it's first parameter. 
  The second function should return a new third function. 
  Store the third function in a variable, codeEcho which, 
  when invoked, invokes the first, original function that was passed in, 
  but will only ever do so once (returns null after first invocation).
*/

  //Code Here

function codeLove() {
  return "I love code";
}

function codeFriend(fn) {
  var hasRan = false;
  var numberOfTimesRan = 0;
  return function() {
    if (hasRan === false) {
      hasRan = true;
      console.log(numberOfTimesRan);
      ++numberOfTimesRan;
      return fn();
    }
    else {
      console.log(numberOfTimesRan);
      ++numberOfTimesRan;
      return null;
    }
  }
}

var codeEcho = codeFriend(codeLove);
//UNDERSTANDING THE CODE ABOVE!!!! codeEcho is just equal to the invocation of codeFriend, which happends to return that
//    innner function. SO, when we invoke codeEcho a second time, it just returns that inner
//    function, which from the first time we ran it, changed the var hasRan to true. 
//    **Since the inner function is a child of the other function (codeFriend), it has the power to
//    change the parent's (codeFriend's) variable values.**
//    So, now when we invoke codeEcho for the second time, it by-passes the first if condition
//    because hasRan is not true. So it jumps to the else part, which returns null.

codeEcho();


//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. 
  The first parameter will be an anonymous function and the second parameter, 'N', will be a number. 
  Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. 
  After it's been invoked 'N' number of times, return 'STOP'.
*/

function fnCounter(fn, N) {
  var counter = 0;
  return function () {
    if (counter < N) {
      ++counter;
      return fn();
    }
    else {
      return "STOP";
    }
  }
}

var innerFunction = fnCounter(function(){ return "hi"}, 3);
innerFunction();


//Next Problem

//questions!!!!


/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. 
  *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here
    //MY ANSWER: the function will log "1, 2, 3, 4, 5, 6" in the console


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here
    //MY ANSWER: wrong


  Fix the counter function so that it works the way you expect it to work. 
  (logging 1 then 2 then 3, etc) 
  (Note: No unit test for this one because of the timeout)
*/

    //Code Here

    //My Notes == syntax for immediately invoked function....(function(num){ return num; }(i));
    
    var counter = function() {
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };




//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/

function funcArray(index) {
  return index;
}


