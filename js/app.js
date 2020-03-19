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
	secondCard: '',
	// guessed: '',
	


	flipCard: function(event){
		// console.log(event.currentTarget); // <-- see what card was clicked in dataset -- 
		const back = event.currentTarget.querySelector('.frontOfCard')
		if (event.path[1].querySelector('.backOfCard').hidden === false) {
			event.path[1].querySelector('.backOfCard').hidden = true
			event.path[1].querySelector('.frontOfCard').hidden = false
			// this.firstCard.push(frontOfCard.dataCard)
		}
		else {
			event.path[1].querySelector('.backOfCard').hidden = false
			event.path[1].querySelector('.frontOfCard').hidden = true
		}
		// console.log("i was clicked")

		if(back.hidden === true){
			//fist card has been flipped
			this.firstCard = event.currentTarget
			this.firstCardFlipped = true
			console.log(this.firstCard)
			console.log(this.firstCardFlipped);
			// compore
			game.compareCards()
		}

	},


	compareCards: function(att){
		// const attTarget = att.querySelector('.backOfCard')
		if(this.firstCard === this.firstCard){
			


	
			// console.log(att);
		}


	}
}

// replace this with one listener -- use event.target to figure out what was clicked


const cardDiv = document.querySelectorAll('.game')
for(let i = 0; i < cardDiv.length; i++){
	cardDiv[i].addEventListener('click', (event) =>{
		game.flipCard(event)
		//const target = event.target
		// game.compareCards(cardDiv[i].getAttribute('data-card'))
			
	})
}






