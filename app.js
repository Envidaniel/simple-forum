require('dotenv').config();


const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const forumController = require('./controllers/forumController');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true})); //pour forum;
app.use(express.static('public'));


app.get('/', forumController.getAll);
app.post('/post', forumController.postMessage);

app.listen(PORT, () => console.log('forum live'));