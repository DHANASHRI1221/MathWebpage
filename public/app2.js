
let finalScorearray = [0,0,0,0,0];
let finalScore=0;
let score1=0;
function checkans(inputElement){

   let score = 0;
   // console.log(inputElement.value);
   let listItem = inputElement.closest('div');
    //console.log(inputElement.id);
   // console.log(listItem);
   let listItem2=listItem.parentNode;
   // console.log(listItem2.id);
   let listItemsElement = listItem2.querySelector('.list_items');
   // console.log(listItemsElement);

    let numberText = listItemsElement.querySelector('.Numbers').innerHTML;
   //  console.log(numberText);
    let sum = parseInt(numberText.split("+")[0]) + parseInt(numberText.split("+")[1]);
    let userAnswer = parseInt(inputElement.value);
   //  console.log(sum);
   //  console.log(userAnswer);
   if (sum === userAnswer) {
       console.log("correct");
       score += 10;
       
    
   } else {
       console.log("incorrect");
       score=0;
       
   }
   if(inputElement.id=="input1"){
      finalScorearray[0]=score;
    }
    else if(inputElement.id=="input2"){
      finalScorearray[1]=score;
    }
    else if(inputElement.id=="input3"){
      finalScorearray[2]=score;
    }
    else if(inputElement.id=="input4"){
      finalScorearray[3]=score;
    }
    else if(inputElement.id=="input5"){
      finalScorearray[4]=score;
    }
}

function submission() {
   let div1 = document.getElementById('remove');
   div1.innerHTML = "";  // Clear the content of the 'remove' div

   // Create a new div with id 'new' and append it to the 'remove' div
   let newDiv = document.createElement('div');
   newDiv.id = 'new';
   newDiv.innerHTML = '<p>You have submitted the answer</p>';
   div1.appendChild(newDiv);
   console.log(finalScorearray);
   for(let i=0; i<finalScorearray.length; i++){
      finalScore += finalScorearray[i];
   }
  //  console.log(finalScore);
   sendDataToServer() 
}

function sendDataToServer() {
  let data = {
     score1:`${score1}`,
      score2: `${finalScore}`
     
  };
  
  // Make a POST request to the server
  
  fetch('http://localhost:3000/leaderboard', {
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
  })
  
  
   };