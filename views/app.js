// // const { response } = require("express");

// let username;
// let password;
// let class_name;
// function login_detail(loginId){
//     let element=document.getElementById(loginId);
//     // console.log("hi");
//     // console.log(element);
//     // let parent=element.parentElement;
//     // console.log(parent);
//     // let parent2=parent.parentElement;
//     // console.log(parent2);
//     let input=document.getElementById('inputs');
//     // console.log(input);
//     let children=input.children;
//     // console.log(children);
//     let collection_array=Array.from(children);
//     // console.log(collection_array);
//     let div_1=collection_array[0];
//     // console.log(div_1);
//     let input_name1=div_1.children;
//     username=input_name1[0].value;
//     // console.log(input_name[0].value);
//     let div_2=collection_array[1];
//     let input_name2=div_2.children;
//     password=input_name2[0].value;
   
//     let div_3=collection_array[2];
//     let input_name3=div_3.children;
//     let selectedIndex = input_name3[0].selectedIndex;
   
//     let selectedOption = input_name3[0].options[selectedIndex];
   
//     class_name = selectedOption.text;
//     sendDataToServer();
    
//  }

//  function sendDataToServer() {
// let data = {
//     username: `${username}`,
//     password: `${password}`,
//     class_name:`${class_name}`
// };

// // Make a POST request to the server

// fetch('http://localhost:3000/', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
   
// }

// )

// .then(response => response.json())
// .then(data => {
//     console.log('Server response:', data);
// })
// .catch(error => {
//     console.error('Error:', error);
// })


//  };




//   import { sendDataToServer } from './client.js';

  function login_detail(loginId) {
    // Assuming you have retrieved username, password, and class_name values
    let element=document.getElementById(loginId);
        // console.log("hi");
        // console.log(element);
        // let parent=element.parentElement;
        // console.log(parent);
        // let parent2=parent.parentElement;
        // console.log(parent2);
        let input=document.getElementById('inputs');
        // console.log(input);
        let children=input.children;
        // console.log(children);
        let collection_array=Array.from(children);
        // console.log(collection_array);
        let div_1=collection_array[0];
        // console.log(div_1);
        let input_name1=div_1.children;
        username=input_name1[0].value;
        // console.log(input_name[0].value);
        let div_2=collection_array[1];
        let input_name2=div_2.children;
        password=input_name2[0].value;
       
        let div_3=collection_array[2];
        let input_name3=div_3.children;
        let selectedIndex = input_name3[0].selectedIndex;
       
        let selectedOption = input_name3[0].options[selectedIndex];
       
        class_name = selectedOption.text;

    let data = {
      username: username,
      password: password,
      class_name: class_name,
    };

    sendDataToServer(data);
  }
// client.js

async function sendDataToServer(data) {
    return fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
