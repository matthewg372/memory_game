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

	multiplayer: false,
    scorePlayer1: 0,
    scorePlayer2: 0,
    rounds: 0,
    firstCardFlipped: false,
    secondCardFlipped: false,
    firstCard: '',
    secondCard: '',
    timeElapsed: 0,
    guessed: false,

    ShuffleAtStart: function(){
    	const shuffle = document.querySelectorAll('.game')
    	for(let i = 0; i < shuffle.length; i++){
    		let randomCards = Math.floor(Math.random() * 12)
    			shuffle[i].style.order = randomCards
    			
    	}

    },


    flipCard: function(containerDiv) {
        const back = containerDiv.querySelector('.backOfCard')
        const front = containerDiv.querySelector('.frontOfCard')
        if (front.hidden === false) {
            front.hidden = true
            back.hidden = false
            this.guessed = true
        } else {
            front.hidden = false
            back.hidden = true
        }
        if (this.firstCardFlipped === false) {
            this.firstCardFlipped = true
            this.firstCard = containerDiv
        } else if (this.guessed === true) {
            this.secondCardFlipped = true
            this.secondCard = containerDiv
            game.compareCards()
        }

    },

    compareCards: function() {
    	console.log("compare");
        const printRounds = document.querySelector('#score')
        if(this.firstCard.id === this.secondCard.id) {
            this.scorePlayer1++
            printRounds.innerText = this.scorePlayer1
            game.rightGuess()
        }else if(this.firstCard.id != this.secondCard.id) {
            game.wrongGuessFlipBack()
        }
    },
    wrongGuessFlipBack: function(containerDiv) {
    	const flip = document.querySelector('.backOfCard')
        const flip2 = document.querySelector('.frontOfCard')
        if (this.firstCardFlipped === true) {
        	flip2.hidden = false
            flip.hidden = true
            console.log('wrong');
        }
        if (this.secondCardFlipped === true) {
            flip2.hidden = false
            flip.hidden = true
            game.reset()
            // game.flipCard()

        }
    },
    reset: function(){
    this.firstCardFlipped = false
    this.guessed = false
    this.firstCard = ''
    this.secondCard = ''
    this.secondCardFlipped = false

    },
    rightGuess: function(){
    	console.log("right");
    	this.firstCard.style.opacity = '0'
    	this.secondCard.style.opacity = '0'
    	game.reset()
    },


    winOrLose: function(){
    	if{
    		this.scorePlayer1 === 6
    		this.timeElapsed === 30

    	}

    },
    player2: function(){
    },


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
    multiplayerStart: function(){
    	multiplayer = true
    }
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
    game.ShuffleAtStart()
})

const player = document.querySelector('#single')
player.addEventListener('click', (event) => {
    event.preventDefault()
    // const target = event.currentTarget
    // game.flipCard()
    game.start()
    game.ShuffleAtStart()
})

const duoPlayer = document.querySelector('#duo')
duoPlayer.addEventListener('click', (event) => {
    event.preventDefault()
    // const target = event.currentTarget
    // game.flipCard()
    game.start()
    game.ShuffleAtStart()
    game.multiplayerStart()
})











