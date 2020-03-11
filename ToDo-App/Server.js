let express = require('express')
let path = require('path');

let app = express()

app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post(`/create-item`, function(req, res) {
    console.log(req.body.item)
    res.send("Thanks for submitting the form.")
})
app.listen(3000)