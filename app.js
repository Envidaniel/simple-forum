

const express = require('express');
const app = express();
const forumController = require('./controllers/forumController');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true})); //pour forum;
app.use(express.static('public'));


app.get('/', forumController.getAll);
app.post('/post', forumController.postMessage);

app.listen(3000, () => console.log('forum live'));