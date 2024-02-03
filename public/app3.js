// app3.js

let selectedDivs = [];
let box1;
let box2;

function generateRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Create the color string in the format "rgb(red, green, blue)"
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}

function newBox(){
    let array = Array.from(document.getElementsByClassName("pair1"));
    array.forEach(box=>{
        box.addEventListener("click",()=>{
            return box.id;
        })
    })
}

function handleButtonClick(boxId) {
    // const box = document.getElementById(boxId);
    // let newColor = generateRandomColor();
    // if (selectedDivs.length < 2) {
    //     selectedDivs.push(box);
    //     // box.style.backgroundColor = newColor;

    //     if (selectedDivs.length === 2) {
    //         drawLineBetweenDivs(selectedDivs[0], selectedDivs[1]);
    //     }
    // }
    // selectedDivs[0].style.backgroundColor=newColor;
    // selectedDivs[1].style.backgroundColor=newColor;
    if(box1==undefined){
        box1 = document.getElementById(boxId);
    }
    else if(box2 == undefined){
        box2 = document.getElementById(boxId);
    }
    
    if(box1!=undefined && box2!=undefined){
        let newColor = generateRandomColor();
        box1.style.backgroundColor = `${newColor}`;
        box2.style.backgroundColor = `${newColor}`;
        drawLineBetweenDivs(box1,box2);
        box1=undefined;
        box2=undefined;
    }
}



function drawLineBetweenDivs(box1, box2) {
//  let element1=document.getElementById(box1);
//  let element2=document.getElementById(box2);
// console.log("hi");
 let rect1 = box1.getBoundingClientRect();
 let rect2=box2.getBoundingClientRect();

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
    let length = Math.sqrt((x_coordinate1 - x_coordinate2)**2 + (y_coordinate1 - y_coordinate2)**2) + 'px';

    let div = document.createElement("div");
    div.className = "line";
    div.style.width = `${length}`;
    div.style.transform = `rotate(${angle})`;
    div.style.left = `${x_coordinate1}`;
    div.style.top = `${y_coordinate1}`;

    let sibling = document.getElementsByClassName("pair1_ele")[0];
    sibling.insertAdjacentElement('afterend',div);
    
}


