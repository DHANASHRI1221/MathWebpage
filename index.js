
const mysql = require('mysql2');
const express=require("express");
const app=express();
const path=require("path");
app.use(express.static(path.join(__dirname,"public")));
const methodoverride=require("method-override");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(methodoverride("_method"));
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'instagram',
    password:'sql@123' // write your user password
  });


let port=3000;
app.listen(port,(req,res)=>{
  console.log(`server is listening from ${port}`);
})
app.get("/", (req, res) => {
    // let q = `SELECT COUNT(*) FROM infos`;

   res.render("index_lg.ejs");
  });
  

  app.get("/main-page", (req, res) => {
    
   res.render("index_m.ejs");
  });
  app.get("/question_1", (req, res) => {
   
   res.render("index1.ejs");
  });
  app.get("/question_2", (req, res) => {
   
   res.render("index2.ejs");
  });
  app.get("/question_3", (req, res) => {
  
   res.render("index3.ejs");
  });
  app.get("/profile", (req, res) => {
   
   res.render("index_p.ejs");
  });
  
//   app.get("/main-page", (req, res) => {
//     // let q = `SELECT COUNT(*) FROM infos`;
//    res.render("index_m.ejs");
//   });
