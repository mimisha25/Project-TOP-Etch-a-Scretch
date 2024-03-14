const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');

const button = document.getElementById("myButtons");
const eight =  document.querySelector("#eight");
const sixteen = document.querySelector("#sixteen");
const reset = document.querySelector(".reset")



function randomColor() {
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}


const grid8 = "auto auto auto auto auto auto auto auto";
const grid16 = "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto";
const grid0="";

// function makeDivs(numDivs, size, column) {
//     for (let d = 0; d < numDivs; d++){
//         let cells = document.createElement("div");
//         cells.style.width = `${size}px `;
//         cells.style.height = `${size}px`;
//         cells.style.border = '1px solid gray';
//         container1.appendChild(cells);
//         container1.style.gridTemplateColumns = column ;

        // cells.addEventListener("mouseover", function mouseOver() {
        //     cells.style.backgroundColor = randomColor() ;
        //   });
// } 
// }


  function tok(){
    for (let d = 0; d < 64; d++){
       const cell8 = document.createElement("div");
      cell8.classList.add("eight");
      container1.appendChild(cell8);
      cell8.addEventListener("mouseover", function mouseOver() {
                    cell8.style.backgroundColor = randomColor() ;
                  });
         }              
  }
  
  function pop(){
    for (let d = 0; d < 256; d++){
        const cell16 = document.createElement("div");
      cell16.classList.add("sixteen");
      container2.appendChild(cell16);
      cell16.addEventListener("mouseover", function mouseOver() {
        cell16.style.backgroundColor = randomColor() ;
      });
         }              
  }

      const kok = e => {
        e.target.nodeName === 'BUTTON';
        if(e.target.id === "eight"){
            tok();
            document.getElementById('container1').style.display = "grid";
            document.getElementById('container2').style.display = "none";
           
        }else if(e.target.id === "sixteen"){
            document.getElementById('container2').style.display = "grid";
            document.getElementById('container1').style.display = "none"; 
            pop();
        }
    }
    button.addEventListener("click", kok);

    reset.addEventListener("click", function refreshPage(){
        window.location.reload();
    } )

