"use strict";
//interfaccia per lo stato del game
// interface GameState {
//   cards: Card[];
//   moves: number;
//   flippedCard: Card[];
// }
let movesCounter;
//array con le carte
const cards = [
    { id: 1, value: "😂", isFlipped: false, isMatched: false },
    { id: 2, value: "😂", isFlipped: false, isMatched: false },
    { id: 3, value: "😁", isFlipped: false, isMatched: false },
    { id: 4, value: "😁", isFlipped: false, isMatched: false },
    { id: 5, value: "🚀", isFlipped: false, isMatched: false },
    { id: 6, value: "🚀", isFlipped: false, isMatched: false },
    { id: 7, value: "🤡", isFlipped: false, isMatched: false },
    { id: 8, value: "🤡", isFlipped: false, isMatched: false },
    { id: 9, value: "👾", isFlipped: false, isMatched: false },
    { id: 10, value: "👾", isFlipped: false, isMatched: false },
    { id: 11, value: "🤖", isFlipped: false, isMatched: false },
    { id: 12, value: "🤖", isFlipped: false, isMatched: false },
    { id: 13, value: "🥶", isFlipped: false, isMatched: false },
    { id: 14, value: "🥶", isFlipped: false, isMatched: false },
    { id: 15, value: "🍄", isFlipped: false, isMatched: false },
    { id: 16, value: "🍄", isFlipped: false, isMatched: false },
];
// applico l'algoritmo Fisher Yates
function shuffleCards(cards) {
    let currentIndex = cards.length;
    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        //in questa parte del codice utilizzo il destructuring
        [cards[currentIndex], cards[randomIndex]] = [
            cards[randomIndex], //è una destructuring assignment in JavaScript, che viene usata qui per scambiare i valori di due elementi nell'array
            cards[currentIndex],
        ];
    }
    return cards;
}
// shuffleCards(cards);
console.log(cards);
//creo l'array che servirà per il confronto delle carte flippate
const flippedCard = [];
//creo la funzione per flippare le cards e controllare se le due carte cliccate sono abbinate
function flip(card) {
    card.isFlipped = true;
    if (card.isFlipped) {
        flippedCard.push(card);
    }
    const card1 = flippedCard[0];
    const card2 = flippedCard[1];
    if (card1 && card2) {
        if (card1.value === card2.value) {
            card1.isMatched = true;
            card2.isMatched = true;
            console.log("sono uguali");
        }
        else {
            setTimeout(() => {
                card1.isFlipped = false;
                card2.isFlipped = false;
            }, 2000);
        }
    }
}
flip(cards[0]);
flip(cards[1]);
