require('dotenv').config();
const express = require('express');
const cors = require("cors")
const app = express();
const connection = require("./db");



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "*",}));
app.use(require("./routes/Routes"));

//database connection
connection();

app.get("/", (req, res) => {res.send("Deployed successfully");});
app.get("/api/ok", (req, res) => {return res.status(200).send({ message: "ok", time: new Date() });});


const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));

