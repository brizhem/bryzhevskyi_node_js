const http = require("http");
const { fork } = require("child_process");
const arrItems = require("./items");

const host = "localhost";
const port = 3000;

const requestListener = function (req, res) {
  const child = fork(__dirname + "/fork_process");

  child.on("message", (message) => {
    console.log("Returning results");

    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(message);
  });

  child.send({ name: "START", items: arrItems });
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
