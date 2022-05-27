const express = require("express");
const routes = require("./routers/routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", routes());

app.listen(3000, () => console.log("server statr on port 3000"));
