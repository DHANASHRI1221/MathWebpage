let score1;
let score2=0;
function changeColor(clickedButton) {
   
    let score=0;
    let allButtons = document.querySelectorAll('.btn');

    allButtons.forEach(button => {
        button.style.backgroundColor = ''; 
    });

    
    clickedButton.style.backgroundColor = 'green';
    
    let selected_button = parseInt(clickedButton.innerHTML);

   
    let buttonsArray = Array.from(allButtons).map(button => parseInt(button.innerHTML));
    let minNumber = Math.min(...buttonsArray);

    if (selected_button === minNumber) {
        // console.log("correct");
        score=10;
        score1=score;
    }
    else{
        // console.log("incorrect");
        score1=0;
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
    sendDataToServer();
}

function sendDataToServer() {
    let data = {
        score1: `${score1}`,
        score2: `${score2}`
        
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