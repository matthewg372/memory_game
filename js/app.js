
// class Player {
// 	constructor(numb){
// 		this.playerNum = numb;
// 		this.time = 0;
// 		this.score = 0
// 	}
// }

// // const newPlayer = new Player(1)
// // console.log(newPlayer);

// // const OtherNewPlayer = new Player(2)
// // console.log(OtherNewPlayer);

// const game ={
// 	multiplayer: false,
// 	rounds: 0,
// 	firstCardFlipped
// 	secondCardFlipped
// 	firstCard
// 	secondCard
// 	players: []
// 	activePlayer: null
// }

// //if you use a players array this is how to get them in there
// //const OtherNewPlayer = new Player(2)
// //players.push(OtherNewPlayer)


// //if you use activePlayer this is what to do
// const newPlayer = new Player(1)
// this.activePlayer = newPlayer

// //your gameplay function, after the player has picked two cards, switches the active player to the other player
// activePlayer.score += 1
// activePlayer.time++


console.log("hello")


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
    timeElapsed2: 0,
    guessed: false,

    ShuffleAtStart: function() {
        const shuffle = document.querySelectorAll('.game')
        for (let i = 0; i < shuffle.length; i++) {
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
    switchActivePlayer: function(){
    	if(activePlayer === players[0]){
    		this.activePlayer = players[1]
    	} else {
    		this.activePlayer = players[0]
    	}
    }

    compareCards: function() {
        const printRounds = document.querySelector('#score')
        if (this.firstCard.id === this.secondCard.id) {
            this.scorePlayer1++
            this.activePlayer.score++
            printRounds.innerText = `first player: ${this.scorePlayer1}`
            game.rightGuess()
            //this.switchActivePlayer()
            //this.stopTime(this.activePlayer){
            	//this.activePlayer.time = this.activePLayer.time
            	//}
        } else if(this.firstCard.id != this.secondCard.id) {
            game.reset()
        }
    },
    compareCards2: function() {
        const printRounds = document.querySelector('#score2')
        if (this.firstCard.id === this.secondCard.id) {
            this.scorePlayer2++
            printRounds.innerText = `second player: ${this.scorePlayer2}`
            // game.rightGuess()
        } else if (this.firstCard.id != this.secondCard.id) {
            game.reset()
        }
        // game.winOrLose()
    },
    reset: function() {
        const back = this.firstCard.querySelector('.backOfCard')
        const front = this.firstCard.querySelector('.frontOfCard')
        const back1 = this.secondCard.querySelector('.backOfCard')
        const front1 = this.secondCard.querySelector('.frontOfCard')
        setTimeout(function() {
            back.hidden = true
            front.hidden = false
            back1.hidden = true
            front1.hidden = false
        }, 600);
        this.firstCardFlipped = false
        this.secondCardFlipped = false
        this.guessed = false
        this.firstCard = ''
        this.secondCard = ''
    },
    rightGuess: function() {
        this.firstCard.style.opacity = '0'
        this.secondCard.style.opacity = '0'
        game.reset()

    },
    winOrLose: function() {
        if (this.scorePlayer1 === 6) {
            const memory = document.querySelectorAll('.game')
            for (let i = 0; i < memory.length; i++) {
                memory[i].style.opacity = '100'
            }
            if (this.multiplayer === true) {
                this.rounds++
                round.innerText = `rounds: ${this.rounds}`
            }
        }
    },
    player2: function() {},
    endgame: function() {
        const alert = document.querySelector('.model-body')
        const round = document.querySelector('#rounds')
        alert.style.visibility = "visiable"
        if (this.scorePlayer1 === 6) {
            alert.hidden = false
            alert.innerText = "you win"
            clearInterval(this.intervalID)
        } else if (this.timeElapsed === 30) {
            alert.hidden = false
            alert.innerText = "you lose"
            clearInterval(this.intervalID)
        }
        game.winOrLose()
    },
    start: function() {
        this.intervalID = setInterval(() => {
            this.timeElapsed++
            this.printTime()
            this.endgame()
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
    //     start2: function() {
    //     this.intervalID = setInterval(() => {
    //         this.timeElapsed++
    //         this.printTime()
    //         this.endgame()
    //     }, 1000)
    // },
    // printTime: function() {
    //     const seconds = this.timeElapsed
    //     const p = document.querySelector('#timer2')
    //     let mm = Math.floor(seconds / 60)
    //     let ss = seconds - (mm * 60)
    //     if (ss < 30) {
    //         ss = "0" + ss
    //     }
    //     p.innerHTML = `Game time: ${mm}:${ss}`
    // },
    reload: function() {
        location.reload()

    },
    multiplayerStart: function() {
        this.multiplayer = true
    }
}

const container = document.querySelector('.memory')
container.addEventListener('click', (event) => {
    game.flipCard(event.target.parentNode)

})


const player = document.querySelector('#single')
player.addEventListener('click', (event) => {
    event.preventDefault()
    game.start()
    game.ShuffleAtStart()
})

const duoPlayer = document.querySelector('#duo')
duoPlayer.addEventListener('click', (event) => {
    event.preventDefault()
    game.start()
    game.ShuffleAtStart()
    game.multiplayerStart()
})


const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', (event) => {
    event.preventDefault()
    game.reload()
})