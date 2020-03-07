let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded({extended: false}))

ourApp.get("/",function(req, res){
    res.send(`
    <form action="/answer" method="POST">
    <p>What color is the body of a columbidae?</p>
    <input name="doveColor" autocomplete="off">
    <button>Submit Answer</button>
    </form>`)
})

ourApp.post("/answer", function(req, res) {
if (req.body.doveColor.toLowerCase() == "white") {
res.send(`
    <p>Congrats, that is the correct answer!</p>
    <a href="/">Back to homepage</a>
`)
} else {
res.send(`
    <p>Sorry, that is incorrect.</p>
    <a href="/">Back to homepage</a>
`)
}
})

ourApp.get("/answer", function(req, res) {
    res.send("Are you lost? There is nothing here.")
    })

ourApp.listen(3000)