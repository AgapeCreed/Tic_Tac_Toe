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

//Function for draw
const drawFunction = () => {
	disableBtn();
	msgOut.innerHTML = "&#x1F60E; <br> It's a Draw";
};

//New Game
newGameBtn.addEventListener("click", () => {
	count = 0;
	enableBtn();
});
restartBtn.addEventListener("click", () => {
	count = 0;
	enableBtn();
});

//Win Logic
const winChecker = () => {
	//Loop through all win patterns
	for (let i of winningPattern) {
		let [element1, element2, element3] = [
			gridBtn[i[0]].innerText,
			gridBtn[i[1]].innerText,
			gridBtn[i[2]].innerText,
		];
		//Check if elements are filled
		//If 3 empty elements are same and would give win as would
		if (element1 != "" && (element2 != "") & (element3 != "")) {
			if (element1 == element2 && element2 == element3) {
				//If all 3 buttons have same values then pass the value to winFunction
				winFunction(element1);
			}
		}
	}
};

//Display X/O on click
gridBtn.forEach((element) => {
	element.addEventListener("click", () => {
		if (xTurn) {
			xTurn = false;
			//Display X
			element.innerText = "X";
			element.disabled = true;
		} else {
			xTurn = true;
			//Display Y
			element.innerText = "O";
			element.disabled = true;
		}
		//Increment count on each click
		count += 1;
		if (count == 9) {
			drawFunction();
		}
		//Check for win on every click
		winChecker();
	});
});

startBtn.addEventListener("click", () => {
	enableBtn();
	landing.innerHTML = `
        <style> 
            .landing {
                display: none;
            }
        </style>`;
});
