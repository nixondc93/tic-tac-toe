// wait for the DOM to finish loading
$(document).ready(function() {
var x = '<img src="svg_icons/close.svg" alt="X" class = "xOrO"/>';
var o = '<img src="svg_icons/circle.svg" alt="O" class = "xOrO"/>'
var ticTacArr = [null, null, null, null, null, null, null, null, null];

function reset(){
  $('#reset').click(function(){
    $('.box').empty();
    $('.box').removeClass('hasImg')
    ticTacArr = [null, null, null, null, null, null, null, null, null];
  });
}

function ticTacToe(){
  player = true;
  $('.box').click(function(){
    if(player){
      if(!$(this).hasClass('hasImg')){
        $(this).append(x);
        $(this).addClass('hasImg');
        player = false;
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
      }else{
        if(!$(this).hasClass('hasImg')){
          $(this).append(o);
          $(this).addClass('hasImg');
          player = true;
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
      victor();

    });}



  function victor(){
    if((ticTacArr[0] === 'x' && ticTacArr[1] === 'x'&& ticTacArr[2] === 'x')){
      return alert('player 1 wins');
    }
    if((ticTacArr[3] === 'x'&& ticTacArr[4] === 'x'&& ticTacArr[5] === 'x')){
      return alert('player 1 wins');
    }
    if((ticTacArr[6] === 'x'&& ticTacArr[7] === 'x'&& ticTacArr[8] === 'x')){
      return alert('player 1 wins');
    }
    if((ticTacArr[0] === 'x'&& ticTacArr[3] === 'x'&& ticTacArr[6] === 'x')){
      return alert('player 1 wins');
    }
    if((ticTacArr[1] === 'x'&& ticTacArr[4] === 'x'&& ticTacArr[7] === 'x')){
      return alert('player 1 wins');
    }
    if((ticTacArr[2] === 'x'&& ticTacArr[5] === 'x'&& ticTacArr[8] === 'x')){
      return alert('player 1 wins');
    }
    if((ticTacArr[0] === 'x'&& ticTacArr[4] === 'x'&& ticTacArr[8] === 'x')){
      return alert('player 1 wins');
    }
    if((ticTacArr[2] === 'x'&& ticTacArr[4] === 'x'&& ticTacArr[6] === 'x')){
      return alert('player 1 wins');
    }



    if((ticTacArr[0] === 'o' && ticTacArr[1] === 'o' && ticTacArr[2] === 'o' )) {
      return alert('player 2 wins');
    }
    if((ticTacArr[3] === 'o' && ticTacArr[4] === 'o' && ticTacArr[5] === 'o' )) {
      return alert('player 2 wins');
    }
    if((ticTacArr[6] === 'o' && ticTacArr[7] === 'o' && ticTacArr[8] === 'o' )) {
      return alert('player 2 wins');
    }
    if((ticTacArr[0] === 'o' && ticTacArr[3] === 'o' && ticTacArr[6] === 'o' )) {
      return alert('player 2 wins');
    }
    if((ticTacArr[1] === 'o' && ticTacArr[4] === 'o' && ticTacArr[7] === 'o' )) {
      return alert('player 2 wins');
    }
    if((ticTacArr[2] === 'o' && ticTacArr[5] === 'o' && ticTacArr[8] === 'o' )) {
      return alert('player 2 wins');
    }
    if((ticTacArr[0] === 'o' && ticTacArr[4] === 'o' && ticTacArr[8] === 'o' )) {
      return alert('player 2 wins');
    }
    if((ticTacArr[2] === 'o' && ticTacArr[4] === 'o' && ticTacArr[6] === 'o' )) {
      return alert('player 2 wins');
    }
  }

ticTacToe();
reset();
});
