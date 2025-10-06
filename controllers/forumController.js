
let messages = []; // persistance en memoire pour test

exports.getAll = ((req,res) => {
    res.render('forum', { messages });
})

exports.postMessage = ((req,res) => {
    const {author, text} = req.body;
    messages.push({ id : Date.now(), author, text, date : new Date().toLocaleString()});
    res.redirect('/');  // back a la liste
})