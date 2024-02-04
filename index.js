
const mysql = require('mysql2');
const express=require("express");
// const bodyParser = require('body-parser');
const app=express();
const path=require("path");
// const bodyParser = require('body-parser');
app.use(express.json());
// app.use(bodyParser.json());

const methodoverride=require("method-override");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
let total_score=0;
let Student_Name;



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'students',
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
app.get("/logout",(req, res)=>{
  res.render("index_lo.ejs");
});
app.get("/quiz",(req, res)=>{
  res.render("index1_q.ejs");
});
app.get("/quiz1",(req, res)=>{
  res.render("index2_q.ejs");
});
app.get("/quiz2",(req, res)=>{
  res.render("index3_q.ejs");
});


app.post('/', (req, res) => {
   let receivedData = req.body;

   
    let {username,password,class_name}=req.body;
   
  //  let q = `SELECT password_1,classname_1 FROM user WHERE username_1 = '${username}' `;
   let insertQuery = `INSERT INTO user (username_1, password_1, classname_1,score_1) VALUES ('${username}', '${password}', '${class_name}','${total_score}')`;
   connection.query(insertQuery, [username, password, class_name,total_score], (insertErr, insertResults) => {
    if (insertErr) {
      console.error("Error inserting user:", insertErr);
      
    }
 
   
    // User inserted successfully
  
  
  });
  //  try{ connection.query(q,(err,result)=>{ 
   
  
  //      console.log(result); 
  //     //  let password_11 = result[0].password_1;
  //     //  let classname_11= result[0].classname_1;
     
  //   // if(password==password_11 && class_name==classname_11){
  //   //   console.log("Rendering index_m.ejs");
  //   //      res.redirect("/main-page");
       
  //   // }
  //   // else{
  //   //   console.log("wrong pass");
  //   //   res.redirect("/logout");
  //   // }
     
      
       
      
  // })
  // }
  // catch{
  //   console.log("some error in database");
  // }

});








app.post('/leaderboard', (req, res) => {
  let receivedData = req.body;
 
  //  console.log(req.body);
  let score_1;
  let score_2;
   let {score1}=req.body;
  let {score2}=req.body;
 let {score3}=req.body;
  
  total_score+=parseInt(score1)+parseInt(score2)+parseInt(score3);
  // console.log(total_score);


});



// app.get("/leaderboard",(req, res)=>{
//   let q=`UPDATE your_table SET score = '${total_score}' WHERE  username_1 = '${Student_Name}'`;

//   try{ connection.query(q,(err,result)=>{ 
   
       
//   res.render("index_lb.ejs",{total_score});
//   })
//  }
//   catch{
//     console.log(err);
//   }

//   let leaderboardQuery = `SELECT username_1, score_1 FROM user ORDER BY score_1 DESC LIMIT 3`;
//    connection.query(leaderboardQuery, (err, result) => {
//             if (err) {
//                 console.error("Error retrieving leaderboard:", err);
//                 // Handle the error appropriately
//                 // return res.status(500).json({ error: "Failed to retrieve leaderboard." });
//             }
//            console.log(result);
//             // Extract usernames and scores from the leaderboard result
//             // let topThreeUsers = result.map(row => ({ username: row.username, score: row.score }));

//             // Send the updated score and top three users to the client
//             // console.log(topThreeUsers);
//             // res.json({ updatedScore: newScore, topThreeUsers });
//         });

  
// });


app.get("/leaderboard", (req, res) => {
  let updateQuery = `UPDATE user SET score_1 = '${total_score}' WHERE username_1 = '${Student_Name}'`;

  try {
    connection.query(updateQuery, (err, updateResult) => {
      if (err) {
        console.error("Error updating score:", err);
        // Handle the error appropriately
        // return res.status(500).send("Failed to update score.");
      }

      let leaderboardQuery = `SELECT username_1, score_1 FROM user ORDER BY score_1 DESC LIMIT 3`;
      connection.query(leaderboardQuery, (err, leaderboardResult) => {
        if (err) {
          console.error("Error retrieving leaderboard:", err);
          // Handle the error appropriately
          // return res.status(500).send("Failed to retrieve leaderboard.");
        }
       
        // Extract usernames and scores from the leaderboard result
        let topThreeUsers = leaderboardResult.map(row => ({ username: row.username_1, score: row.score_1 }));
         
        // Send the updated score and top three users to the client
        // console.log(leaderboardResult);
        // console.log(topThreeUsers);
        res.render("index_lb.ejs", { total_score ,topThreeUsers });
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

