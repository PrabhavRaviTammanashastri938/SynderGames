
var count = 0;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

function change(str)
{
    if (count % 2 == 0)
    {
        var button = document.getElementById(str);
        button.textContent = "X";
    }
    else
    {
        var button = document.getElementById(str);
        button.textContent = "O";
    }
    count+=1;
    
    justcheck('X');
    justcheck('O');
}

function reset() {
    var buttons = document.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].className !== 'op' && buttons[i].className !== 'op1') {
        buttons[i].innerText = '';
      }
    }
    const dis = document.getElementById("display");
    dis.value = "";
    count=0;
  }

function winner(str)
{
  const dis = document.getElementById("display");
  dis.value = str;
  count=0;
}

function justcheck(str)
{
  if ( document.getElementById('b1').innerText == str && document.getElementById('b2').innerText == str && document.getElementById('b3').innerText == str)
  {
    winner(str);
  }
  if ( document.getElementById('b4').innerText == str && document.getElementById('b5').innerText == str && document.getElementById('b6').innerText == str)
  {
    winner(str);
  }
  if ( document.getElementById('b7').innerText == str && document.getElementById('b8').innerText == str && document.getElementById('b9').innerText == str)
  {
    winner(str);
  }
  if ( document.getElementById('b1').innerText == str && document.getElementById('b4').innerText == str && document.getElementById('b7').innerText == str)
  {
    winner(str);
  }
  if ( document.getElementById('b2').innerText == str && document.getElementById('b5').innerText == str && document.getElementById('b8').innerText == str)
  {
    winner(str);
  }
  if ( document.getElementById('b3').innerText == str && document.getElementById('b6').innerText == str && document.getElementById('b9').innerText == str)
  {
    winner(str);
  }
  if ( document.getElementById('b1').innerText == str && document.getElementById('b5').innerText == str && document.getElementById('b9').innerText == str)
  {
    winner(str);
  }
  if ( document.getElementById('b3').innerText == str && document.getElementById('b5').innerText == str && document.getElementById('b7').innerText == str)
  {
    winner(str);
  }
}

function redirectToGames() {
  window.location.href = "/games";
}


