require('dotenv').config();
const express =require('express');
const cors =require ("cors")
const app = express ();
const connection = require ("./db");

//database connection
connection();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(require("./routes/Routes"));

/* const port= process.env.PORT;
app.listen(port,()=> console.log(`Listening on port ${port}`));
 */
