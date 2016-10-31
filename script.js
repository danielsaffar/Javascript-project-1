/*var frontEnd = ['HTML', 'CSS', 'Javascript'];
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


// javascript day2


var number=6;
while (number < 20) {
	console.log(number);
	number=number + 1
}

// FizzBuzz

//15
for (var i=0; i<=20;i++) {
	if (i%5 === 0) {
		console.log("fizz"+i);
	}else if(i%3 ===0) {
		console.log("buzz"+i);
	}else if (i%5===0 && i%3===0) {
		console.log("fizzbuzz"+i);
	}
	else {
		console.log(i);
	}

};



var family = ["Aaron", "Sarah", "Isaiah"];
console.log(family);
family.push("Noa");
console.log(family);


// liste restaurant

var restaurants= ["Il conte","Sushi Rehavia","Pip's","View","Le Marais"];

for(i=0; i<restaurants.length;i++) {
console.log(restaurants[i])
};

//calcul average array

\*/



var array=[11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];

var sum=0;
for (i=0; i<array.length;i++) {
sum = sum + array[i];
}
alert(sum);

//




