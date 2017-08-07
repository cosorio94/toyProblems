<body>
  <table>
    <tr>
      <td class="box"></td>
      <td class="box"></td>
      <td class="box"></td>
    </tr>
    <tr>
      <td class="box"></td>
      <td class="box"></td>
      <td class="box"></td>
    </tr>
    <tr>
      <td class="box"></td>
      <td class="box"></td>
      <td class="box"></td>
    </tr>
  </table>
</body>

var boxes = Array.from(document.getElementsByClassName("box"));
boxes.forEach((box, index) => {
  box.addEventListener('click', (e) => {
    game.playTurn(box);
  });
});

var addMarker = function(box, playerOneTurn) {
  if (!!box.firstChild) {
    return false;
  } else if (playerOneTurn) {
    // add circle
    var text = document.createTextNode("O")
    box.appendChild(text);
  } else {
    // add x
    var text = document.createTextNode("X")
    box.appendChild(text);
  }
  return true;
}

class Game {
  constructor() {
    this.playerOneTurn = true;
    this.winner = null;
  }
  
  playTurn(box) {
    addMarker(box, this.playerOneTurn);
    this.checkGame();
    this.playerOneTurn = !this.playerOneTurn;
  }
  
  checkGame() {
    
  }
  
  endGame() {
  
  }
};

var game = new Game();



.box {
  border-style: solid;
  width: 50px;
  height: 50px;
  text-align: center;
}