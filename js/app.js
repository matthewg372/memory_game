console.log("hello")

class Player1{
	constructor(score, rounds){
		this.score = 0
		this.rounds = 0

	}
}


const game = {

	score: 0,
	rounds: 0,


flipCard: function(event){
	// console.log("i was clicked")
	// console.log(this)

	}


}

const cards = document.querySelectorAll('.game')
for(let i = 0; i < cards.length; i++){
cards[i].addEventListener('click', (event) =>{
	const listen = event.target
	game.flipCard(listen)
	})
}



