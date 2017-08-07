// Game class
class Game {
  constructor(players) {
    this.deck = new Deck();
    this.players = players;
    this.winner = null;
    this.currentTurn = players[0];
    this.currentPlayers = players;
  }

  gameStart() {
    // iterate this.players twice
      // take card for each player
  }

  gameEnd() {
    // for all players
      // get the player with the highest score that hasn't lost and set it to this.winner
  }

  getPlayersScore() {
    // return array with each players score
  }

  playTurn(play) {
    // call players play
    // pass turn to next player
  }

}



// Player class
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.lost = false;
  }

  takeCard(deck) {
    this.hand.push(deck.getCard());
    if (this.calculateTotal() > 21) {
      this.lost = true;
    }
  }

  stay() {
    // skips turn
  }

  hit(deck) {
    this.takeCard(deck);
  }

  calculateTotal() {
    // returns sum of all the player's card's values
  }
}



// Deck class
class Deck {
  constructor() {
    // this.cards = list of all possible cards
  }

  shuffle() {
    // shuffles randomly all its cards
  }

  getCard() {
    // return this.cards.pop();
  }
}




// Card class
class Card {
  constructor(type, suit){
    this.type = type;
    this.suit = suit;
    // this.value = map type to card value
  }
}