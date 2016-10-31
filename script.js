var frontEnd = ['HTML', 'CSS', 'Javascript'];
var frontEndLanguages = frontEnd;


//exercice 1

var age= prompt ("How old are you?");

if (age >=18 ) {
	alert("You can drink! Beer or Vodka?");
}

else {
	alert("You can't drink, Go home it's too late for you!");
};


// exercice 2

var citizenship = prompt ("Hi, what is your nationality?");

if (citizenship === "Israeli" ){
alert("Welcome home, you can pass!");

}else {
	alert("You can't pass, go home...");
};


//exercice 3

var gender= prompt ("What's your gender?");
var age=prompt ("How old are you?");

if ( gender=== "girl" && age>=18) {
	alert ("get a free drink.");
}
else if (gender=== "male" && age>=18) {
	alert("You can drink, but you must pay.")
}
else {
 alert("you can't drink anything.")
}
