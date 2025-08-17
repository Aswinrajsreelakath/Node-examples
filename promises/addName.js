const http = require("http");
const fs = require("fs").promises;

const PORT = 4001;
const ENCODING = "utf8";
const FILE = "names.json"; // use same file everywhere

const server = http.createServer((req, res) => {
  const url = req.url;

  // GET all users
  if (url.includes("getAllUsers")) {
    fs.readFile(FILE, ENCODING)
      .then((data) => res.end(data))
      .catch((err) => res.end(JSON.stringify({ error: err.message })));
  }

  // INSERT user
  else if (url.includes("insertUser")) {
    let name = url.split("=")[1].split("&")[0];
    let id = parseInt(url.split("=")[2]);

    if (!name?.trim()) {
      res.end("User name cannot be empty");
      return;
    }

    fs.readFile(FILE, ENCODING)
      .then((fileData) => {
        let namesArr = JSON.parse(fileData);
        let exists = namesArr.some((u) => u.name === name);
        if (exists) {
          res.end("Error: User with same name already exists");
          return Promise.reject();
        }
        namesArr.push({ name, id });
        return fs.writeFile(FILE, JSON.stringify(namesArr, null, 2));
      })
      .then(() => res.end("User inserted successfully"))
      .catch((err) => {
        if (err) res.end(JSON.stringify({ error: err.message }));
      });
  }

  // DELETE user
  else if (url.includes("deleteUser")) {
    let name = url.split("=")[1];
    if (!name) {
      res.end("Error: Missing name parameter for deleteUser");
      return;
    }
    fs.readFile(FILE, ENCODING)
      .then((fileData) => {
        let namesArr = JSON.parse(fileData);
        let index = namesArr.findIndex((u) => u.name === name);
        if (index === -1) {
          res.end("Error: User not found");
          return Promise.reject();
        }
        namesArr.splice(index, 1);
        return fs.writeFile(FILE, JSON.stringify(namesArr, null, 2));
      })
      .then(() => res.end(`User '${name}' deleted successfully`))
      .catch((err) => {
        if (err) res.end(JSON.stringify({ error: err.message }));
      });
  }

  // UPDATE user
  else if (url.includes("updateUser")) {
    let oldName = url.split("=")[1].split("&")[0];
    let newName = url.split("=")[2];

    if (!oldName || !newName) {
      res.end("Error: Missing oldName or newName parameter for updateUser");
      return;
    }

    fs.readFile(FILE, ENCODING)
      .then((fileData) => {
        let usersArr = JSON.parse(fileData);
        let index = usersArr.findIndex((u) => u.name === oldName);
        if (index === -1) {
          res.end("Error: User not found");
          return Promise.reject();
        }
        usersArr[index].name = newName;
        return fs.writeFile(FILE, JSON.stringify(usersArr, null, 2));
      })
      .then(() =>
        res.end(`User '${oldName}' updated to '${newName}' successfully`)
      )
      .catch((err) => {
        if (err) res.end(JSON.stringify({ error: err.message }));
      });
  }

  // DEFAULT
  else {
    res.end(
      "Available routes:\n/getAllUsers\n/insertUser?name=NAME&id=ID\n/deleteUser?name=NAME\n/updateUser?oldname=OLDNAME&newname=NEWNAME"
    );
  }
});

// Start server OUTSIDE of createServer
server.listen(PORT, (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
