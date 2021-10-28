const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.put('/api', (req, res) => {
	const flip = Math.ceil(Math.random() * 2) === 1 ? 'HEADS' : 'TAILS';
	const winCheck = flip === req.body.flip ? 'winner' : 'loser';
	let result = {
		flipped: flip,
		winLoss: winCheck,
	};
	res.send(result);
});

app.listen(7500, console.log('running on 7500'));
