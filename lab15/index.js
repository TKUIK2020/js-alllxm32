const express = require('express');
const app = express();
const generateImage = require('random-image-creator');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (reg, res) => {
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.end("<img src = '"+generateImage(500, 500)+"'>")
});
app.listen(3000, () => {console.log("Server has started")});