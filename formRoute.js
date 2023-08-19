const fs = require("fs")
const routeHandeler = (req, res) => {

    console.log(req.url);
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("message.txt", "utf8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }
            console.log("File content:", data);
            res.write(data)
            res.write("<form action=/message method=POST> <input type=text placeholder=enter name=message/> <button type=submit>submit</button></form>");
            return res.end();
        });
        // res.write("<form action=/message method=POST> <input type=text placeholder=enter name=message/> <button type=submit>submit</button></form>");
        // return res.end();
        //these both commented line should be wrapped in call back like we have done otherwise these twoline will run first and then readfiles
        //callback will run and already res.end has been exicuted so now you cannot res.write any thing
        // always rememember  all callback will get exicuted after all code
    }

    if (req.url === "/message" && req.method === "POST") {
        const body = []
        req.on("data", (chunk) => {
            body.push(chunk)
            console.log(chunk)
        })
        return req.on("end", () => {
            console.log("onend")
            const parsedBody = Buffer.concat(body).toString()
            const data = parsedBody.split("=")[1]
            console.log({ data })
            fs.writeFileSync("message.txt", data)

            res.statusCode = 302
            res.setHeader("Location", "/");//to redirect on localhost5000

            return res.end(data); // You can also use res.end("message"); here

        })
    }
}

module.exports = routeHandeler