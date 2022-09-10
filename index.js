require('dotenv').config();
const express = require('express');
const cors = require("cors")
const app = express();
const connection = require("./db");

const register = require("./routes/Register");
const login = require("./routes/Login");
const products = require("./routes/Products");


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "*",}));


//database connection
connection();

app.get("/", (req, res) => {res.send("Your API now is UP , Deployed successfully");});
app.get("/api", (req, res) => {return res.status(200).send({ message: "Your API now is UP... =>", time: new Date() });});
app.get("/api/products", (req, res) => {res.send(products);});

app.use("/api/register", register);
app.use("/api/login", login);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

