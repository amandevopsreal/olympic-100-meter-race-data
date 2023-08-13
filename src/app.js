const express = require("express");
require("../src/db/conn")
const router = require("../src/routers/men")

const MensRanking = require("../src/models/mens");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.use(router)

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})