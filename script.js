//from HTML
const gridX = document.getElementById("gridX");
const gridY = document.getElementById("gridY");
const table = document.getElementById("table");

class Node {
    constructor(x,y,element,neighbors) {
        this.x = x;
        this.y = y;
        this.element = element;
        this.neighbors = neighbors;
        this.wall = false;
        this.visted = false;
        this.pathTaken = false;
    }
}

function makeGrid(gridX,gridY) {
        for(let y = 0; y < gridY; y++) {
            let tableRow = table.insertRow(-1)
            console.log(y);
            for(let x = 0; x < gridX; x++) {
                
                let node = new Node(x,y)
                node.element = tableRow.insertCell();
                console.log(node.element)
            }
        }
}

makeGrid(4,4)