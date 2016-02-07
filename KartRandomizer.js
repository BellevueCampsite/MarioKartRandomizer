var randomKart = Math.floor(Math.random() * 6) + 1;



if (randomKart == 1){
	document.getElementById("Mario").className = "graybackground";
} else if(randomKart == 2) {
	document.getElementById("Luigi").className = "graybackground";
} else if(randomKart == 3) {
	document.getElementById("Peach").className = "graybackground";
} else if(randomKart == 4) {
	document.getElementById("Toad").className = "graybackground";
} else if(randomKart == 5) {
	document.getElementById("Yoshi").className = "graybackground";
} else if(randomKart == 6) {
	document.getElementById("DK").className = "graybackground";
} else if(randomKart == 7) {
	document.getElementById("Bowser").className = "graybackground";
} else if(randomKart == 8) {
	document.getElementById("Wario").className = "graybackground";
}

/* This will check to ensure that the same random number cannot be generated on consecutive button clicks

if (randomKart == randomKart) {
	randomKart += 1;
}


*/
