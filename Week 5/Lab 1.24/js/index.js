$(document).ready(function() {

	$('#rock').click(playRock);
	$('#paper').click(playPaper);
	$('#scissors').click(playScissors);

function playRock() {

	var rock = 'rock';

	playGame(rock);
}

function playPaper() {

	var paper = 'paper';

	playGame(paper);
}

function playScissors() {

	var scissors = 'scissors';

	playGame(scissors);
}

	function playGame(userChoice) {
		console.log(userChoice);

		var computerChoice = ['rock','paper','scissors'];
		var makeAChoice = function () {
			var computerSelection = computerChoice[Math.floor(Math.random() * 3)];

			return computerSelection;
		};

		if (userChoice == makeAChoice() ) {

			console.log("It is a draw");

		}else if (userChoice == 'rock' && makeAChoice() == 'paper') { 
			console.log('Loser');

		}else if ( userChoice == scissors && makeAChoice() == 'paper') {

			console.log('Winner');

		}else if ( userChoice == 'paper' && makeAChoice() == 'rock') { console.log('Winner');


		}else if (userChoice == 'scissors' && makeAChoice() == 'rock') { console.log('Loser');


		}else if (userChoice == 'paper' && makeAChoice() == 'scissors') { console.log('Loser');

		}else if (userChoice == 'rock' && makeAChoice() == 'scissors') {  console.log('Winner');

		}

		  /* if (userChoice == computerChoice)

		    {
		       return "It is a draw!";
		    }

		if (userChoice == 'rock') {

		} if (computerChoice == 'paper') {

			return 'Computer Wins';

		} else {

			return 'You Win';

		}else if (userChoice == 'paper') {

			if (computerChoice == 'scissors') {

				return 'Computer wins'; 

			}else {

				return 'You Win';

			}else if (userChoice == 'scissors') {

				if (computerChoice == 'rock') {

					return 'Computer Wins'
				}else {

					return 'You win';

				}
			}
		} */

			 




	}

});