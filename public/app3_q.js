let box1, box2, text1, text2;
let finalScoreArray = [0,0,0,0,0];
let selected = [-1,-1,-1,-1,-1];
let score1 = 0, score2 = 0, score3 = 0;

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}

function handleButtonClick(boxId) {
    let score = 0;
    if(box1==undefined){
        box1 = document.getElementById(boxId);
        let part1 = parseInt(box1.innerHTML.split('+')[0]);
        let part2 = parseInt(box1.innerHTML.split('+')[1]);
        text1 = part1 + part2;
    }
    else if(box2 == undefined){
        box2 = document.getElementById(boxId);
        text2 = parseInt(box2.innerHTML);
    }
    
    if(box1!=undefined && box2!=undefined){
        let newColor = generateRandomColor();
        box1.style.backgroundColor = `${newColor}`;
        box2.style.backgroundColor = `${newColor}`;

        if(text1 == text2){
            score += 10;
        }

        let id = box1.id;
        let index = parseInt(id.split('x')[1]) - 1;
        let index2 = parseInt(box2.id.split('x')[1]);
        finalScoreArray[index] = score;
        if(selected[index]==-1){
            drawLineBetweenDivs(box1,box2,index);
            selected[index] = index2;
        }
        else{
            let line = document.getElementsByClassName(`line ${index}`)[0];
            line.remove();
            drawLineBetweenDivs(box1,box2,index);
            let oldIndex = selected[index];
            let box = document.getElementById(`box${oldIndex}`);
            box.style.backgroundColor = '#189AB4';
            selected[index] = index2;
        }
        box1=undefined;
        box2=undefined;
    }
}



function drawLineBetweenDivs(box1, box2,index) {
    let rect1 = box1.getBoundingClientRect();
    let rect2 = box2.getBoundingClientRect();

    let x_coordinate1=rect1.right;
    let x_coordinate2=rect2.left;
    let top1=rect1.top;
    let top2=rect2.top;
    let bottom1=rect1.bottom;
    let bottom2=rect2.bottom;
    let y_coordinate1=(top1+bottom1)/2;
    let y_coordinate2=(top2+bottom2)/2;
  
    let slope= (y_coordinate2-y_coordinate1)/(x_coordinate2-x_coordinate1);
    let angle = Math.atan(slope)*(180/Math.PI) + 'deg';
    let length = Math.sqrt((x_coordinate1 - x_coordinate2)**2 + (y_coordinate1 - y_coordinate2)**2);

    let div = document.createElement("div");
    div.className = `line ${index}`;
    div.style.width = `${length}px`;
    div.style.transform = `rotate(${angle})`;
    div.style.left = `${x_coordinate1}`;
    div.style.top = `${y_coordinate1}`;

    let sibling = document.getElementsByClassName("pair1_ele")[0];
    sibling.insertAdjacentElement('afterend',div);
    
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
    sendDataToServer();
 }
