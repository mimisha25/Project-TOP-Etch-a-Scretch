const containerForColumn8 = document.getElementById("containerForColumn8");
const containerForColumn16 = document.getElementById("containerForColumn16");
const gridButton = document.getElementById("gridButtons");
const buttonFor8Col = document.querySelector("#buttonFor8Col");
const buttonFor16Col = document.querySelector("#buttonFor16Col");
const reset = document.querySelector(".reset")



function randomColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function grid8col() {
    for (let d = 0; d < 64; d++) {
        const cellFor8Column = document.createElement("div");
        cellFor8Column.classList.add("buttonFor8Col");
        containerForColumn8.appendChild(cellFor8Column);

        black.addEventListener("click", function black(){
            cellFor8Column.addEventListener("mouseover", function mouseOver() {
                cellFor8Column.style.backgroundColor ="black";
            });
        });

        rainbow.addEventListener("click", function rainbow(){
            cellFor8Column.addEventListener("mouseover", function mouseOver() {
                cellFor8Column.style.backgroundColor =randomColor();
            });
        });

        white.addEventListener("click", function white(){
            cellFor8Column.addEventListener("mouseover", function mouseOver() {
                cellFor8Column.style.backgroundColor ="white";
            });
        });
    }
}
     

function grid16col() {
    for (let d = 0; d < 256; d++) {
        const cellFor16Column = document.createElement("div");
        cellFor16Column.classList.add("buttonFor16Col");
        containerForColumn16.appendChild(cellFor16Column);

        black.addEventListener("click", function black(){
            cellFor16Column.addEventListener("mouseover", function mouseOver() {
                cellFor16Column.style.backgroundColor ="black";
            });
        });

        rainbow.addEventListener("click", function rainbow(){
            cellFor16Column.addEventListener("mouseover", function mouseOver() {
                cellFor16Column.style.backgroundColor =randomColor();
            });
        });

        white.addEventListener("click", function white(){
            cellFor16Column.addEventListener("mouseover", function mouseOver() {
                cellFor16Column.style.backgroundColor ="white";
            });
        });
    }
}


const switchGridButtons = e => {
    e.target.nodeName === 'BUTTON';
    if (e.target.id === "buttonFor8Col") {
        containerForColumn8.style.display = "grid";
        containerForColumn16.style.display = "none";
        grid8col();
    } else if (e.target.id === "buttonFor16Col") {
        containerForColumn16.style.display = "grid";
        containerForColumn8.style.display = "none";
        grid16col();
    }
}
gridButton.addEventListener("click", switchGridButtons);

reset.addEventListener("click", function refreshPage() {
    window.location.reload();
})

