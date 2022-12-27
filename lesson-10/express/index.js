const express = require('express'); // import
const cors = require('cors'); // import cors => Cross Origin Reponse Policy

const app = express(); // create app

// middlewares
app.options('*', cors({}));

// cors
app.use(cors({ origin: '*' }));

// url encoded
app.use(express.urlencoded({ extended: false }));
// json
app.use(express.json());

// listen main url
app.get('/', (_req, res) => {
	res.status(200).json({ message: 'salam' });
});
// login
app.post(
	'/login',
	cors({
		origin: '*',
		methods: 'GET,POST',
		allowedHeaders: '*',
		optionsSuccessStatus: 200,
		preflightContinue: false,
	}),
	(req, res) => {
		const b = req.body();
		console.log({ req, b });
		res.status(200).json({ message: 'salam' });
	},
);

// start app
app.listen(80, () => {
	console.log('listening to 3000');
});
