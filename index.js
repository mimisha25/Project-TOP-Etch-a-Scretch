const container = document.getElementById('container');

function makeDivs(numDivs) {
for (let d = 0; d < numDivs; d++){
    let cells = document.createElement('div');
    container.appendChild(cells) 
    cells.addEventListener("mouseover", function mouseOver() {
        cells.style.backgroundColor = randomColor() ;
      });   
    }

}
makeDivs(256);

function randomColor() {
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

