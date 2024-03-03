const express = require('express');
const path = require("path");
const bcrypt = require("bcrypt");
const collection=require("./config");
const exp = require('constants');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');

app.use(express.static("public"));

app.get("/",(req,res) =>
{{
    res.render("login");
}});

app.get('/home', (req, res) => {
    res.render('home'); // Render home.ejs
});

app.get('/about', (req, res) => {
    res.render('about'); // Render about.ejs
});

app.get('/games', (req, res) => {
    res.render('games'); // Render games.ejs
});

app.get('/play-tic-tac-toe', (req, res) => {
    res.redirect('/tic_tac_toe.html');
});

app.get('/game_hang', (req, res) => {
    res.redirect('/game_hang.html');
});

app.get('/rps_game', (req, res) => {
    res.redirect('/rps_game.html');
});


app.get('/author', (req, res) => {
    res.render('author'); // Render author.ejs
});


app.get("/signup",(req,res) =>
{{
    res.render("signup");
}});   //repaste

//Regsiter user
app.post("/signup",async(req,res)=>{
    const data = {
        name:req.body.username,
        password:req.body.password
    }


    // check if user already exists

    const existingUser  = await collection.findOne({name : data.name});

    if(existingUser)
    {
        res.send("User already exists. Please use another username");
    }
    else{
        const saltRounds=10;
        
        const hashedPassword = await bcrypt.hash(data.password,saltRounds);
    
        data.password=hashedPassword;
        const userdata= await collection.insertMany(data);
        console.log(userdata);
    }
});

app.post("/login", async (req,res) =>{
    try{
        const check = await collection.findOne({name:req.body.username});
        if(!check)
        {
            res.send("user name cannot be found");
        }
        const isPasswordmatch = await bcrypt.compare(req.body.password,check.password);
        if(isPasswordmatch)
        {
        res.render("home");
        }
        else{
        req.send("Wrong password");
        }
    }

    catch{
        
            res.send("Wrong Details");
    }
});

const port = 5000;
app.listen(port,() =>
{
    console.log(`Server running on Port : ${port}`);
})