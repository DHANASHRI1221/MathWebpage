// function changeColor(button) {
// //     let button1= document.getElementsByClassName("btn1")[0];
// //     let button2= document.getElementsByClassName("btn2")[0];
// //     let button3= document.getElementsByClassName("btn3")[0];
// //     let button4= document.getElementsByClassName("btn4")[0];
    
// //   if(button1){
// //     button1.style.backgroundColor ="green";
// //   }
// //   else if(button2){
// //     button2.style.backgroundColor ="green";
// //   }
// //   else if(button3){
// //     button3.style.backgroundColor ="green";
// //   }
// //   else if(button4){
// //     button4.style.backgroundColor ="green";
// //   }
// button.style.backgroundColor="green";
// }
function changeColor(clickedButton) {
    // Get all buttons with the class 'btn'
    let score=0;
    let allButtons = document.querySelectorAll('.btn');

    // Reset the background color for all buttons
    allButtons.forEach(button => {
        button.style.backgroundColor = ''; // Reset to default (empty string)
    });

    // Set the background color for the clicked button
    clickedButton.style.backgroundColor = 'green';
    // let selected_button=clickedButton.innerHTML;


    // let button=document.getElementsByClassName('btn');
    // let buttonsArray = Array.from(button);
    // let minNumber = Math.min(...buttonsArray);
    // if (parseInt(selected_button) === minNumber) {
    //     console.log("correct");
    // }
    let selected_button = parseInt(clickedButton.innerHTML);

    // Extract numeric values of all buttons and find the minimum
    let buttonsArray = Array.from(allButtons).map(button => parseInt(button.innerHTML));
    let minNumber = Math.min(...buttonsArray);

    if (selected_button === minNumber) {
        console.log("correct");
        score=10;
    }
    else{
        console.log("incorrect");
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
}

