const cors = require('cors')
const express = require('express')

const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('testing api <br> by NataliaLM');
});

app.get('/proxy_size', (req, res) => {
	res.sendfile("assets/proxy_size.json");
  });

app.get('/dev_hours', (req, res) => {
	res.sendfile("assets/dev_hours.json");
  });

app.listen(port,  () => 
	console.log('listening on port ' + port
));