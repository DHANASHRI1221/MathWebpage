
let finalScorearray = [0,0,0,0,0];
let finalScore=0;

function checkans(inputElement){
//     let score=0;
//  let number=document.getElementById('Numbers').innerHTML;
//  let sum=parseInt(number.split("+")[0]) + parseInt(number.split("+")[1]);
//  let input=parseInt(document.getElementById('input').value);
//  if(sum===input){
//     console.log("correct");
//    score+=10;
//  }
//  else{
//     console.log("incorrect"); 
//  }



  
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
   console.log(finalScore);
}
