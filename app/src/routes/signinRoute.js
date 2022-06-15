const express = require('express');
const router = express.Router();
const app = express();
const path  = require('path');


app.set('views', path.join(__dirname, 'pages'))
app.set('view engine', 'ejs');


app.post('/signin', (req,res) =>{
    res.redirect('profile');
});

app.get('/', (req, res) => {
    res.send('app is working')
})