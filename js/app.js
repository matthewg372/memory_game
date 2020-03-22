
class Player {
	constructor(numb){
		this.playerNum = numb
		this.time = 0
		this.score = 0
		this.name = name
	}
}


console.log("hello")


const game = {

    name: null,
    multiplayer: false,
    rounds: 0,
    firstCardFlipped: false,
    secondCardFlipped: false,
    firstCard: '',
    secondCard: '',
    timeElapsed: 0,
    timeElapsed2: 0,
    guessed: false,
    players: [],
    activePlayer: null,


    newPlayer: function() {

        const newPlayer = new Player(1)
        this.activePlayer = newPlayer
        this.players.push(newPlayer)
    },
    OtherNewPlayer: function() {

        const otherNewPlayer = new Player(2)
        this.activePlayer = otherNewPlayer
        this.players.push(otherNewPlayer)
    },
    // userName: function(name) {
    //     const userName = new Player(name)
    //     this.userName = userName
    // },
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
    switchActivePlayer: function() {
        const printRounds = document.querySelector('#score')
        const second = document.querySelector('#score2')
        if (this.activePlayer === this.players[0]) {
            this.activePlayer = this.players[1]
            second.innerText = `${this.name}: ${this.activePlayer.score}`
        } else {
            this.activePlayer = this.players[0]
            printRounds.innerText = `first player: ${this.activePlayer.score}`
        }
    },

    compareCards: function() {
        const printRounds = document.querySelector('#score')
        if (this.firstCard.id === this.secondCard.id) {
            this.activePlayer.score++
            game.rightGuess()
            if (this.multiplayer === true) {
                this.switchActivePlayer()
            }
            if (this.multiplayer === false) {
                printRounds.innerText = `first player: ${this.activePlayer.score}`

            }
        } else if (this.firstCard.id != this.secondCard.id) {
            if (this.multiplayer === true) {
                this.switchActivePlayer()

            }
            game.reset()
        }
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
        if (this.activePlayer.score === 6) {
            const memory = document.querySelectorAll('.game')
            for (let i = 0; i < memory.length; i++) {
                memory[i].style.opacity = '100'
            }
        }
    },
    endgame: function() {
        const alert = document.querySelector('.model-body')
        const round = document.querySelector('#rounds')
        if (this.multiplayer === true) {
            if (this.activePlayer.score === 3) {
                alert.hidden = false
                alert.innerText = ` player ${this.activePlayer.playerNum} \n you won`
                console.log("here");
                clearInterval(this.intervalID)
            }
        } else if (this.activePlayer.score === 6) {
            alert.hidden = false
            alert.innerText = "you won"
            clearInterval(this.intervalID)
        } else if (this.timeElapsed === 30) {
            alert.hidden = false
            alert.innerText = "you lose"
            clearInterval(this.intervalID)
            game.winOrLose()
        }
    },
    start: function() {
        this.intervalID = setInterval(() => {
            this.timeElapsed++
            this.printTime()
            this.endgame()
            if (this.multiplayer === true) {
                this.switchActivePlayer()
            }
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
    game.newPlayer()
})
const duoPlayer = document.querySelector('#duo')
duoPlayer.addEventListener('click', (event) => {
    event.preventDefault()
    game.start()
    game.ShuffleAtStart()
    game.multiplayerStart()
    game.newPlayer()
    game.OtherNewPlayer()
})
const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', (event) => {
    event.preventDefault()
    game.reload()
})
// const user = document.querySelector('#user')
// user.addEventListener('submit', (event) => {
// 	const users = document.querySelector('#userName')
// 	event.preventDefault()
// 	game.userName(users.value)
// })