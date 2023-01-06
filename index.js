const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const contactList = [
    {
        name: "Kanhaiya",
        phone: "11111111",
    },
    {
        name: "Himanshu",
        phone: "22222222",
    },
    {
        name: "Ankit",
        phone: "33333333"
    },
];

app.get('/', function(req, res){
    // res.end('<h1 style = "text-align: center; color: red;">This is Home page!</h1>');
    return res.render('home', {
        title: 'I Am flying',
        contact_list: contactList,
    });
});
app.get('/practice', function(req, res){
    return res.render('practice', {
        title: 'practice page!',
    })
});

app.post('/action', function(req, res){
    return res.redirect('/practice');
});

app.listen(port, function(err){
    if(err){
        console.log('Error: ', err);
        return;
    }
    console.log("Yup!, Servering is running on port:", port, " fine! Don't worry and keep it");
});