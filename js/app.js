console.log("hello")

// class Player1{
// 	constructor(score, rounds){
// 		this.score = 0
// 		this.rounds = 0

// 	}
// }


const game = {

	// score: 0,
	// rounds: 0,
	//
	firstCardFlipped: false,
	firstCard: '',


	flipCard: function(event){
		console.log(event.currentTarget); // <-- see what card was clicked in dataset -- 
		if (event.querySelector('.backOfCard').hidden === false) {
			event.querySelector('.backOfCard').hidden = true
			event.querySelector('.frontOfCard').hidden = false
		}
		else {
			event.querySelector('.backOfCard').hidden = false
			event.querySelector('.frontOfCard').hidden = true
		}
		// console.log("i was clicked")

		// if(!firstCardFlipped){
		// 	firstCardFlipped = event.currentTarget
		// 	console.log(firstCardFlipped)

		// 	//fist card has been flipped

		// 	// compoare
		// }

	},


	compareCards: function(att){
		// if att is same att cards = correct
		// if (att === att){
		// return true

		// }

	
		console.log(att);


	}
}

// replace this with one listener -- use event.target to figure out what was clicked


const cardDiv = document.querySelector('.memory')
// for(let i = 0; i < cardDiv.length; i++){
	cardDiv.addEventListener('click', (event) =>{
		game.flipCard(event.currentTarget)
		console.log(event.currentTarget)
		//const target = event.target
		//game.compareCards(cardDiv[i].getAttribute('data-card'))
			
	})
// }






