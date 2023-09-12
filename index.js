const cors = require('cors')
const express = require('express')

const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by NataliaLM');
});


app.get('/header', (req, res, next) => {
	res.sendfile("assets/header.json");
});

app.get('/work_experience', (req, res) => {
	res.sendfile("assets/work_experience.json");
  });

app.get('/skills', (req, res) => {
	res.sendfile("assets/skills.json");
  });

app.listen(port,  () => 
	console.log('listening on port ' + port
));