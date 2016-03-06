
var sameDriverTest = 0;
var sameCupTest = 0;

//Function that removes orange border from drivers prior to bordering another driver
function removeBorder () {
	document.getElementById("Mario").className = "";
	document.getElementById("Luigi").className = "";
	document.getElementById("Peach").className = "";
	document.getElementById("Toad").className = "";
	document.getElementById("Yoshi").className = "";
	document.getElementById("DK").className = "";
	document.getElementById("Bowser").className = "";
	document.getElementById("Wario").className = "";
}

//Function that chooses a random driver
function randomizeDriver() {

	// Generate random number to choose driver
	var randomKart = Math.floor(Math.random() * 8) + 1;

	// If the random number is the same as last time, add 1.
	if (randomKart === sameDriverTest) {
		randomKart += 1;
	}

	//Outlines the driver who has been randomly chosen with an orange border
	if (randomKart == 1){
		document.getElementById("Mario").className = "orangeborder";
	} else if(randomKart == 2) {
		document.getElementById("Luigi").className = "orangeborder";
	} else if(randomKart == 3) {
		document.getElementById("Peach").className = "orangeborder";
	} else if(randomKart == 4) {
		document.getElementById("Toad").className = "orangeborder";
	} else if(randomKart == 5) {
		document.getElementById("Yoshi").className = "orangeborder";
	} else if(randomKart == 6) {
		document.getElementById("DK").className = "orangeborder";
	} else if(randomKart == 7) {
		document.getElementById("Bowser").className = "orangeborder";
	} else if(randomKart == 8) {
		document.getElementById("Wario").className = "orangeborder";
	}
	//Set sameRandomTest equal to randomKart to check for same driver back to back
	sameDriverTest = randomKart;
}

function randomizeCup() {
	var cupArray = ["mushroomcup", "flowercup", "starcup", "specialcup"];

	var randomCup = Math.floor(Math.random() * 4);
	if (randomCup === sameCupTest && randomCup < 3) {
		randomCup += 1;
	} else if (randomCup === sameCupTest && randomCup === 3) {
		randomCup -= 1;
	}

	document.getElementById("cupBox").src = "img/" + cupArray[randomCup] + ".png";
	sameCupTest = randomCup;
}


$("#driverButton").click(function(){
	removeBorder();
	randomizeDriver();
});

$("#cupButton").click(function(){
	randomizeCup();
});
