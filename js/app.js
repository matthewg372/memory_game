console.log("hello")


const queenOfHearts = document.querySelector("#QueenOfHearts")
const kingOfHearts = document.querySelector("#KingOfHearts")






const jokerOfClubs = document.querySelector('#JokerOfClubs')

// class Player1{
// 	constructor(score, rounds){
// 		this.score = 0
// 		this.rounds = 0

// 	}
// }
//class player2{
// this.score2
//this.rounds2
// }
const game = {

    score: 0,
    rounds: 0,
    firstCardFlipped: false,
    secondCardFlipped: false,
    firstCard: '',
    secondCard: '',
    timeElapsed: 0,
    // guessed: '',


    flipCard: function(containerDiv) {
        const back = containerDiv.querySelector('.backOfCard')
        console.log(back)
        const front = containerDiv.querySelector('.frontOfCard')
        console.log(front)
        if (front.hidden === false) {
            front.hidden = true
            back.hidden = false
        } else {
            front.hidden = false
            back.hidden = true
        }
        if (front.hidden === true) {
            this.firstCard = containerDiv
            this.firstCardFlipped = true
        } else if (this.firstCardFlipped === true) {
            this.secondCardFlipped = true
            this.secondCard = containerDiv
            game.compareCards()
        }
    },
    compareCards: function() {
    	console.log("compare");
        const printRounds = document.querySelector('#score')
        if (this.firstCard === this.secondCard) {
            this.score++
            printRounds.innerText = this.score
            // game.rightGuess()
        } else if (this.firstCard != this.secondCard) {
            game.wrongGuessFlipBack()
        }
    },
    wrongGuessFlipBack: function() {
    	const flip = eventTarget.querySelector('.backOfCard')
        const flip2 = eventTarget.querySelector('.frontOfCard')
        if (this.firstCardFlipped === true) {
            this.firstCardFlipped = false
            flip2.hidden = false
            flip.hidden = true
        }
        if (this.secondCardFlipped === true) {
            this.secondCardFlipped = false
            flip2.hidden = false
            flip.hidden = true
            game.flipCard()
        }
    },
    // rightGuess: function(){
    // change both to hidden
    // },
    start: function() {
        this.intervalID = setInterval(() => {
            this.timeElapsed++
            this.printTime()
        }, 1000)
    },
    printTime: function() {
        const seconds = this.timeElapsed
        const p = document.querySelector('#timer')
        let mm = Math.floor(seconds / 60)
        let ss = seconds - (mm * 60)
        if (ss < 30) {
            ss = "0" + ss
        }
        p.innerHTML = `Game time: ${mm}:${ss}`
    },
}

const container = document.querySelector('.memory')
container.addEventListener('click', (event) => {
	console.log([event.target]);
	game.flipCard(event.target.parentNode)
})



const nameInput = document.querySelector('#userName')
nameInput.addEventListener('submit', (event) => {
    event.preventDefault()
    // const target = event.currentTarget
    // game.flipCard()
    game.start()
})












