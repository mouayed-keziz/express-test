const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

app.get("/hello", (req, res) => {
	res.send("this is second route");
});

app.get("/hello/:name", (req, res) => {
	res.send(`Hello, ${req.params.name}`);
});

app.post("/hello", (req, res) => {
	res.send(`this is post route, you posted ${JSON.stringify(req.body)}}`);
});
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
	console.log('App listening on port 3000');
});
