let http = require("http")

let ourApp = http.createServer(function(req, res){
    if (req.url == "/") {
        res.end("Hello, and welcome to bird's homepage.")
    }

    if (req.url == "/about") {
        res.end("Hello, thanks for trying to learn about bird.")
    }

    res.end("We cannot find the page for which you are searching.")
})
ourApp.listen(3000)