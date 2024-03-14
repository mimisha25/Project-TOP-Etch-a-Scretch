const containerForColumn8 = document.getElementById("containerForColumn8");
const containerForColumn16 = document.getElementById("containerForColumn16");
const button = document.getElementById("myButtons");
const eight = document.querySelector("#eight");
const sixteen = document.querySelector("#sixteen");
const reset = document.querySelector(".reset")



function randomColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function tok() {
    for (let d = 0; d < 64; d++) {
        const cellFor8Column = document.createElement("div");
        cellFor8Column.classList.add("eight");
        containerForColumn8.appendChild(cellFor8Column);
        cellFor8Column.addEventListener("mouseover", function mouseOver() {
            cellFor8Column.style.backgroundColor = randomColor();
        });
    }
}

function pop() {
    for (let d = 0; d < 256; d++) {
        const cellFor16Column = document.createElement("div");
        cellFor16Column.classList.add("sixteen");
        containerForColumn16.appendChild(cellFor16Column);
        cellFor16Column.addEventListener("mouseover", function mouseOver() {
            cellFor16Column.style.backgroundColor = randomColor();
        });
    }
}

const switchButtons = e => {
    e.target.nodeName === 'BUTTON';
    if (e.target.id === "eight") {
        containerForColumn8.style.display = "grid";
        containerForColumn16.style.display = "none";
        tok();
    } else if (e.target.id === "sixteen") {
        containerForColumn16.style.display = "grid";
        containerForColumn8.style.display = "none";
        pop();
    }
}
button.addEventListener("click", switchButtons);

reset.addEventListener("click", function refreshPage() {
    window.location.reload();
})

