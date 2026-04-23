//TO-DO
    //change colors of td objects
        //goal -> red
        //start ->green
    //get neighbors method (Maybe?????)
    //BFS function

const gridXHTML = document.getElementById("gridX");
const gridYHTML = document.getElementById("gridY");
const startXHTML = document.getElementById("startY");
const startYHTML = document.getElementById("startX");
const goalXHTML = document.getElementById("goalY");
const goalYHTML = document.getElementById("goalX");
const table = document.getElementById("table");

gridXHTML.addEventListener("change", function() {
    let gridpls = makeGrid(gridXHTML.value,gridYHTML.value,table);
    BFS = new Algorithm(BFSFunc, gridpls)
})
gridYHTML.addEventListener("change", function() {
    let gridpls = makeGrid(gridXHTML.value,gridYHTML.value,table);
    BFS = new Algorithm(BFSFunc, gridpls)
})
startXHTML.addEventListener("change", function() {
    let gridpls = makeGrid(gridXHTML.value,gridYHTML.value,table);
    BFS = new Algorithm(BFSFunc, gridpls)
})
startYHTML.addEventListener("change", function() {
    let gridpls = makeGrid(gridXHTML.value,gridYHTML.value,table);
    BFS = new Algorithm(BFSFunc, gridpls)
})
goalXHTML.addEventListener("change", function() {
    let gridpls = makeGrid(gridXHTML.value,gridYHTML.value,table);
    BFS = new Algorithm(BFSFunc, gridpls)
})
goalYHTML.addEventListener("change", function() {
    let gridpls = makeGrid(gridXHTML.value,gridYHTML.value,table);
BFS = new Algorithm(BFSFunc, gridpls)
})

class Node {
    constructor(x,y,element) {
        this.x = x;
        this.y = y;
        this.element = element;
        this.neighbors = [];
        this.wall = false;
        this.visted = false;
        this.pathTaken = false;
    }
    changeColor() {
        if(this.wall == true) {
            //change color to black
            this.element.style.backgroundColor = "black";
        }
        else if(this.visted == true) {
            this.element.style.backgroundColor = "yellow"
        }
        else if(this.pathTaken == true) {
            this.element.style.backgroundColor = "orange"
        }
        else if(this.wall == false) {
            this.element.style.backgroundColor = "white"
        }
        else if(this.visted == false) {
            this.element.style.backgroundColor = "white"
        }
        else if(this.pathTaken == false) {
            this.element.style.backgroundColor = "white"
        } else {
            this.element.style.backgroundColor = "white"
        }
    }

    getNeighbors(cells) {
        let nArray = [];
        if (this.y+1 <= gridYHTML.value) {
            nArray.push(cells[this.x][this.y+1]);
        } 
        if (this.x+1 <= gridXHTML.value) {
            nArray.push(cells[this.x+1][this.y]);
        } 
        if (this.y-1 >= 0) {
            nArray.push(cells[this.x][this.y-1]);
        } 
        if (this.x-1 >= 0) {
            nArray.push(cells[this.x-1][this.y]);
        } 
        this.neighbors = nArray;
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
            node.element.addEventListener("click", function() {
                node.wall = !node.wall
                node.changeColor();
            })
            node.changeColor()
            rows.push(node);
        }
        cells.push(rows);
    }
    return cells;
}
let gridpls = makeGrid(gridXHTML.value,gridYHTML.value,table);

class Algorithm {
    constructor(walk, cells) {
        try {
            this.start = cells[startXHTML.value-1][startYHTML.value-1];
            this.goal = cells[goalXHTML.value-1][goalYHTML.value-1];
            this.walk = walk;
        }
        catch {
            window.alert("Select a number within the dimensions of the grid");
        }
        this.walk(gridpls);
    }
}


BFS = new Algorithm(BFSFunc, gridpls);

function BFSFunc(cells) {
    let s = this.start;
    let g = this.goal;
    vistedArray = []
    toVisitArray = []
    s.element.style.backgroundColor = "green"
    g.element.style.backgroundColor = "red"

    s.visted = true
    vistedArray.push(s)
    s.getNeighbors(gridpls)
    for (let i = 0; i < s.neighbors.length; i++) {
        toVisitArray.push(s.neighbors[i])
    }
    console.log(toVisitArray)
}