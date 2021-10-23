const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(6000);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	// app goes to DB and finds all documents in messages collection then turn them into an array
	db.collection('messages')
		.find()
		.toArray((err, result) => {
			if (err) return console.log(err);
			// pass in an object named messages containing our array of DB documents, into EJS
			res.render('index.ejs', { messages: result });
		});
});
