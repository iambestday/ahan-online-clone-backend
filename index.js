require('dotenv').config();
const express = require('express');
const cors = require("cors")
const app = express();
const connection = require("./db");
const products = require ("./products")
const routes = require("./routes/routes");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "*",}));


//database connection
connection();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));


app.get("/", (req, res) => {res.send("Your API now is UP , Deployed successfully");});
app.get("/api/products", (req, res) => {res.send(products);});
app.use("/", routes);


