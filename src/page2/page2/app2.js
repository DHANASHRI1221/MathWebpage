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
    let allButtons = document.querySelectorAll('.btn');

    // Reset the background color for all buttons
    allButtons.forEach(button => {
        button.style.backgroundColor = ''; // Reset to default (empty string)
    });

    // Set the background color for the clicked button
    clickedButton.style.backgroundColor = 'green';
}
