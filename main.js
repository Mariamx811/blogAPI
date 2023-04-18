const express = require("express");
const app = express();
const db = require("./config/db");
const models = require("./models/main_model");
const userPath =require("./routes/user_route");
const postPath = require("./routes/posts_route");

app.use(express.json());
app.use("/users",userPath);
app.use("/posts",postPath);

db.authenticate().then(() => {
    db.sync({force : true});
    console.log("connected");
});


app.listen(5000,"localhost",()=>{
    console.log("Server is listening on port 5000");
});