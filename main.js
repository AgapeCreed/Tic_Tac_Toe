let gridBtn = document.querySelectorAll(".button-opt");
let popupEl = document.querySelector(".popup");
let newGameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgOut = document.getElementById("message");
let landing = document.querySelector(".landing");
let startBtn = document.querySelector(".get_started");
//Winning Pattern Array
let winningPattern = [
	[0, 1, 2],
	[0, 3, 6],
	[2, 5, 8],
	[6, 7, 8],
	[3, 4, 5],
	[1, 4, 7],
	[0, 4, 8],
	[2, 4, 6],
];

//Player 'X' plays first
let xTurn = true;
let count = 0;
//Disable All Buttons
const disableBtn = () => {
	gridBtn.forEach((element) => (element.disabled = true));
	//enable popup
	popupEl.classList.remove("hide");
	landing.classList.remove("hide");
};

//Enable all buttons (For Start,New Game and Restart)
const enableBtn = () => {
	gridBtn.forEach((element) => {
		element.innerText = "";
		element.disabled = false;
	});
	//disable popup and landing
	popupEl.classList.add("hide");
	landing.classList.add("hide");
};

//This function is executed when a player wins
const winFunction = (letter) => {
	disableBtn();
	if (letter == "X") {
		msgOut.innerHTML = "&#x1F389; <br> 'X' Wins";
	} else {
		msgOut.innerHTML = "&#x1F389; <br> 'O' Wins";
	}
};
