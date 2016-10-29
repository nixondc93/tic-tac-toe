// wait for the DOM to finish loading
$(document).ready(function() {
	var turn = true;
	var winner = false;
	var x = '<img src="svg_icons/close.svg" alt="X" class = "xOrO"/>';
	var o = '<img src="svg_icons/circle.svg" alt="O" class = "xOrO"/>'
	var ticTacArr = [null, null, null, null, null, null, null, null, null];

	function turn2() {
		$('#which-player').empty();
		$('#which-player').append("<p>Player 2, it is your turn.");
	}

	function turn1() {
		$('#which-player').empty();
		$('#which-player').append("<p>Player 1, it is your turn.");
	}

	function reset() {
		$('#reset').click(function() {
			$('.box').empty();
			$('.box').removeClass('hasImg');
			ticTacArr = [null, null, null, null, null, null, null, null, null];
			winner = false;
			turn1();
			turn = true;
		});
	}

	function ticTacToe() {
		turn1();
		$('.box').click(function() {
			turn2()
			if (!winner) {
				if (turn) {
					if (!$(this).hasClass('hasImg')) {
						$(this).append(x);
						$(this).addClass('hasImg');
						turn = false;
						switch ($(this).attr('id')) {
							case '1':
								ticTacArr[0] = 'x';
								break;
							case '2':
								ticTacArr[1] = 'x';
								break;
							case '3':
								ticTacArr[2] = 'x';
								break;
							case '4':
								ticTacArr[3] = 'x';
								break;
							case '5':
								ticTacArr[4] = 'x';
								break;
							case '6':
								ticTacArr[5] = 'x';
								break;
							case '7':
								ticTacArr[6] = 'x';
								break;
							case '8':
								ticTacArr[7] = 'x';
								break;
							case '9':
								ticTacArr[8] = 'x';
								break;
						}
					}
				} else {
					turn1();
					if (!$(this).hasClass('hasImg')) {
						$(this).append(o);
						$(this).addClass('hasImg');
						turn = true;
						switch ($(this).attr('id')) {
							case '1':
								ticTacArr[0] = 'o';
								break;
							case '2':
								ticTacArr[1] = 'o';
								break;
							case '3':
								ticTacArr[2] = 'o';
								break;
							case '4':
								ticTacArr[3] = 'o';
								break;
							case '5':
								ticTacArr[4] = 'o';
								break;
							case '6':
								ticTacArr[5] = 'o';
								break;
							case '7':
								ticTacArr[6] = 'o';
								break;
							case '8':
								ticTacArr[7] = 'o';
								break;
							case '9':
								ticTacArr[8] = 'o';
								break;
						}
					}
				}

			}
			victor();
		});

	}


	function victor() {
    //Draw conditional
    if ((ticTacArr[0] !== null && ticTacArr[1] !== null && ticTacArr[2] !== null && ticTacArr[3] !== null && ticTacArr[4] !== null && ticTacArr[5] !== null && ticTacArr[6] !== null && ticTacArr[7] !== null && ticTacArr[8] !== null)) {
			$('#which-player').empty();
			$('#which-player').append("<p>It's a Draw! Press Reset to begin a new game.");
			winner = true;
		}
		// player one conditionals
		if ((ticTacArr[0] === 'x' && ticTacArr[1] === 'x' && ticTacArr[2] === 'x')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 1 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[3] === 'x' && ticTacArr[4] === 'x' && ticTacArr[5] === 'x')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 1 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[6] === 'x' && ticTacArr[7] === 'x' && ticTacArr[8] === 'x')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 1 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[0] === 'x' && ticTacArr[3] === 'x' && ticTacArr[6] === 'x')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 1 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[1] === 'x' && ticTacArr[4] === 'x' && ticTacArr[7] === 'x')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 1 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[2] === 'x' && ticTacArr[5] === 'x' && ticTacArr[8] === 'x')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 1 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[0] === 'x' && ticTacArr[4] === 'x' && ticTacArr[8] === 'x')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 1 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[2] === 'x' && ticTacArr[4] === 'x' && ticTacArr[6] === 'x')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 1 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		//player 2 conditionals
		if ((ticTacArr[0] === 'o' && ticTacArr[1] === 'o' && ticTacArr[2] === 'o')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 2 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[3] === 'o' && ticTacArr[4] === 'o' && ticTacArr[5] === 'o')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 2 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[6] === 'o' && ticTacArr[7] === 'o' && ticTacArr[8] === 'o')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 2 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[0] === 'o' && ticTacArr[3] === 'o' && ticTacArr[6] === 'o')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 2 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[1] === 'o' && ticTacArr[4] === 'o' && ticTacArr[7] === 'o')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 2 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[2] === 'o' && ticTacArr[5] === 'o' && ticTacArr[8] === 'o')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 2 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[0] === 'o' && ticTacArr[4] === 'o' && ticTacArr[8] === 'o')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 2 Wins! Press Reset to begin a new game.");
			winner = true;
		}
		if ((ticTacArr[2] === 'o' && ticTacArr[4] === 'o' && ticTacArr[6] === 'o')) {
			$('#which-player').empty();
			$('#which-player').append("<p>Player 2 Wins! Press Reset to begin a new game.");
			winner = true;
		}
	}
	ticTacToe();
	reset();
});
