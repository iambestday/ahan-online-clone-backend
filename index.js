require('dotenv').config();
const express =require('express');
const cors =require ("cors")
const app = express ();
const connection = require ("./db");

//database connection
connection();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require("./routes/Routes"));



