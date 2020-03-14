let express = require('express')
let mongodb = require('mongodb')
let path = require('path');

let app = express()
let db

let connectionString = "mongodb+srv://todoAppUser:Bird-Man88@cluster001-rugsw.gcp.mongodb.net/ToDoApp?retryWrites=true&w=majority"
mongodb.connect(connectionString, {userNewUrlParser: true}, function(err, client) {
    db = client.db()
    app.listen(3000)
})

app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post(`/create-item`, function(req, res) {
    db.collection('Items').insertOne({text: req.body.item}, function(){
        res.send("Thanks for submitting the form.")
    })
})
