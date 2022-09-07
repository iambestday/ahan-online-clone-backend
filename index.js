require('dotenv').config();
const express =require('express');
const cors =require ("cors")
const app = express ();
const connection = require ("./db");




//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require("./routes/Routes"));

const port= process.env.PORT;
app.listen(port,()=> console.log(`Listening on port ${port}`));

app.get ("/",(res,req)=>{
    res.send("Back-END Run!");
    });