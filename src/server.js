const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://aryakrrish02:krrish12345@cluster0.g6wrm5g.mongodb.net/notesappdb').then(function () {
    app.get('/', function (req, res) {
        //req is what we  send from frontent to the server
        //res is what we send from server to the frontend
        res.json({
            message: "API working successfully!"
        });
    });

    const noteRouter = require('./routes/Note');
    app.use('/notes', noteRouter);  ///note/add or /note/update


});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server running at port:"+ PORT);
});