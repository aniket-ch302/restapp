const express = require('express');
const app = express();
app.use(express.json());
const v1=require('./v1/webservices')
const requestJson=require('./v1/requestjson')

app.get('/v1/signup', (req, res) => { 
  res.send(requestJson.signupJson);
});

app.post('/v1/signup', (req, res) => { 
  console.log(req.body)
  res.send(req.body);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});