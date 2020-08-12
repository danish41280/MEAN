const express = require('express');
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const cors = require("cors");



dotenv.config();
//Connection to database
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology: true , useNewUrlParser: true },
    ()=>{
    console.log("Connected to DB");
})











//import routes
const ListingRoutes = require("./routes/listing");
const userRoutes = require ("./routes/user");




//import middleware
app.use(express.json());
app.use(cors());
//routes middleware
app.use('/api/listings',ListingRoutes);
app.use('/api/user',userRoutes);

app.listen(4000,()=>console.log("App listening on port 4000"));