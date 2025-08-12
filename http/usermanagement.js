const http = require("http");
const PORT = 30001;

let users = ['aswin', 'jecob', 'irfan'];

const server = http.createServer((req, res) => {
    let url = req.url;

    if (url.includes('getAllUsers')) {
        res.end("The users are " + users);
    }
    else if (url.includes("insertUser")) {
        let srt = url.split('=')[1];

        if (!srt?.trim()) {
            res.end("User name cannot be empty");
        }
        else if (users.includes(srt)) {
            res.end(`${srt} already exists`);
        }
        else {
            users.push(srt);
            res.end(srt + " added successfully");
        }
    }

    else if(url.includes("deleteUser"))
    {
        let srt=url.split('=')[1]
        index= users.indexOf(srt)

        if(index == -1){
            res.end(`${srt} is not found`)
        }
        else{
            users.splice(index,1)
            res.end(`${srt} is deleted succsessfully`)
        }
    }
    else
    {
        res.end("Invalid input ")
    }
});

server.listen(PORT, function (err) {
    if (err) {
        console.log("Error", err);
    }
    else {
        console.log("Run successfully");
    }
});
