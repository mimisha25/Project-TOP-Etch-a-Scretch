const container = document.getElementById('container');
const button = document.getElementById("myButtons");
const eight =  document.querySelector("#eight");
const sixteen = document.querySelector("#sixteen");



function randomColor() {
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}


const grid8 = "auto auto auto auto auto auto auto auto";
const grid16 = "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto";
const grid0="";

function makeDivs(numDivs, size, column) {
    for (let d = 0; d < numDivs; d++){
        let cells = document.createElement("div");
        cells.style.width = `${size}px `;
        cells.style.height = `${size}px`;
        cells.style.border = '1px solid gray';
        container.appendChild(cells);
        container.style.gridTemplateColumns = column ;
        cells.addEventListener("mouseover", function mouseOver() {
            cells.style.backgroundColor = randomColor() ;
          });
} 
}


    const kok = e => {
        e.target.nodeName === 'BUTTON';
        if(e.target.id === "eight"){
  
            makeDivs(64, 62 , grid8)    
        }else if(e.target.id === "sixteen"){
     
            makeDivs(256, 30,grid16);
        }
    }
    button.addEventListener("click", kok);
    
