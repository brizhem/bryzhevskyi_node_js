import express from "express";
import fs from "node:fs";
import { createGzip } from "node:zlib";

const app = express();

app.use(express.text());
app.use(express.json());

//- Save body data from POST request into text file (using streams)
//- GET request: send file in response using streams
app.post("/user", (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const ws = fs.createWriteStream("users.txt");
  let body = req.body;

  if (typeof body !== "string") body = JSON.stringify(body);

  ws.write(body);

  res.send("user saved");
});

app.get("/user", (req, res) => {
  fs.readFile("users.txt", (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Resourse not found!");
    } else {
      res.end(data);
    }
  });
});

//*Additional GET-route to zip on the fly and send existing file (using streams and nodejs zlib module)
app.get("/user/zip", (req, res) => {
  const rs = fs.createReadStream("users.txt");
  const ws = fs.createWriteStream("users.txt.gz");
  const gzip = createGzip();

  rs.pipe(gzip).pipe(ws);

  res.sendFile(
    "D:/Inventorsoft/Course/bryzhevskyi_node_js/homework_http/users.txt.gz"
  );
});

app.listen(3000);
