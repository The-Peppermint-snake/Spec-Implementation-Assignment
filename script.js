//TO-DO
    //add event isners
        //on click
            //walls -> true
    //change colors of td objects
        //walls -> black
        //visited -> yellow
        //pathtaken -> orange
        //goal -> red
        //start ->green
    //get neighbors method
    //BFS function

const gridXHTML = document.getElementById("gridX");
const gridYHTML = document.getElementById("gridY");
const startXHTML = document.getElementById("startY");
const startYHTML = document.getElementById("startX");
const goalXHTML = document.getElementById("goalY");
const goalYHTML = document.getElementById("goalX");
const table = document.getElementById("table");

gridXHTML.addEventListener("change", function() {
    let gridepls = makeGrid(gridXHTML.value,gridYHTML.value,table);

})
gridYHTML.addEventListener("change", function() {
    let gridepls = makeGrid(gridXHTML.value,gridYHTML.value,table);

})
startXHTML.addEventListener("change", function() {
    console.log("start x")
    let gridepls = makeGrid(gridXHTML.value,gridYHTML.value,table);
    BFS = new Algorithm(BFSFunc(), gridepls)

})
startYHTML.addEventListener("change", function() {
    let gridepls = makeGrid(gridXHTML.value,gridYHTML.value,table);
    BFS = new Algorithm(BFSFunc(), gridepls)
})
goalXHTML.addEventListener("change", function() {
    let gridepls = makeGrid(gridXHTML.value,gridYHTML.value,table);
    BFS = new Algorithm(BFSFunc(), gridepls)
})
goalYHTML.addEventListener("change", function() {
    let gridepls = makeGrid(gridXHTML.value,gridYHTML.value,table);
    BFS = new Algorithm(BFSFunc(), gridepls)
})

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
    changeColor() {
        if(this.wall == true) {
            //change color to black
            this.element.style.color = "black"
        }
        if(this.visted == true) {
            //change color to yellow
        }
        if(this.pathTaken == true) {
            //change color to orange
        }
    }

    getNeighbors() {
        //get neighbors of the object
        // -1 and +1 from x and y
    }
}

function makeGrid(gridX,gridY,table) {
    let cells = [];
    table.innerHTML = "";
    for(let y = 0; y < gridY; y++) {
        let tableRow = table.insertRow(-1);
        let rows = [];
        for(let x = 0; x < gridX; x++) {
            let node = new Node(x,y);
            node.element = tableRow.insertCell();
            rows.push(node);
        }
        cells.push(rows);
    }
    return cells;
}
let gridepls = makeGrid(gridXHTML.value,gridYHTML.value,table);

class Algorithm {
    constructor(walk, cells) {
        this.start = cells[startXHTML.value-1][startYHTML.value-1].element;
        this.goal = cells[goalXHTML.value-1][goalYHTML.value-1].element;
        this.walk = walk;

    }
}


BFS = new Algorithm(BFSFunc(), gridepls)

function BFSFunc(s,g) {

}
