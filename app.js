import "./math"
const http = require("http")
const server = http.createServer((req, res) => {
    //whem you will visit to sever it will get exicuted
    console.log("hello world")
})
server.listen(3000, () => {
    console.log("listening at port 3000")
})


