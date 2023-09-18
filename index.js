import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.post("/submit" , async(req,res) => {
    try{
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
        res.render("joke.ejs",{
            setUp : response.data.setup,
            delivery : response.data.delivery
        });
    }
    catch(error){
        console.log(error.response);
        res.sendStatus(500);
    }
});

app.listen(port , () => {
    console.log("Server running on Port : " +port);
});