const heads = document.getElementById('heads');
heads.addEventListener('click', fetchCoinFlip);

const tails = document.getElementById('tails');
tails.addEventListener('click', fetchCoinFlip);

function fetchCoinFlip(e) {
	const flipChoice = e.target.value;
	// `/api?coinflip=${flipChoice}`;
	fetch(`/api`, {
		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			flip: flipChoice,
		}),
	})
		.then(res => {
			return res.json();
		})
		.then(result => {
			console.log(result);
			flip(result);
		})
		.catch(err => console.log(err));
}

function flip(result) {
	coin.classList.remove('heads');
	coin.classList.remove('tails');
	setTimeout(() => {
		if (result.flipped === 'HEADS') {
			coin.classList.add('heads');
		} else {
			coin.classList.add('tails');
		}
	}, 100);
}
