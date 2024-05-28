const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Bistro Boss site is running");
})

app.listen(port,()=>{
    console.log(`Bistro Boss is running on port : ${port}`);
})