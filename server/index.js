const express = require("express");
const cors = require("cors");
const buttonCtrl=require("./controllers/buttonCtrl")

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", buttonCtrl.complimentCtrl);

app.get("/api/fortune", buttonCtrl.fortuneCtrl)

app.get("/api/pun", buttonCtrl.punCtrl)

// app.get("/api/mood")

app.listen(5000, () => console.log("Server running on 5000"));
