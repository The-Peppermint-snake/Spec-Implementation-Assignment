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

})
gridYHTML.addEventListener("change", function() {
    let gridpls = makeGrid(gridXHTML.value,gridYHTML.value,table);

})
startXHTML.addEventListener("change", function() {
    console.log("start x")
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
        this.wall = true;
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

    getNeighbors(oX,oY,cells) {
        let nArray = []
        if (cells[oX][oY+1] !== undefined) {
            nArray.push(cells[oX][oY+1])
        } 
        if (cells[oX+1][oY] !== undefined) {
            nArray.push(cells[oX+1][oY])
        } 
        if (cells[oX][oY-1] !== undefined) {
            nArray.push(cells[oX][oY-1])
        } 
        if (cells[oX-1][oY] !== undefined) {
            nArray.push(cells[oX-1][oY])
        } 
        return nArray;
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
let gridpls = makeGrid(gridXHTML.value,gridYHTML.value,table);

class Algorithm {
    constructor(walk, cells) {
        try {
            this.start = cells[startXHTML.value-1][startYHTML.value-1].element;
            this.goal = cells[goalXHTML.value-1][goalYHTML.value-1].element;
            this.walk = walk;
            console.log("Hello new alogitign")
        }
        catch {
            window.alert("Select a number within the dimensions of the grid")
        }
    
    }
}


BFS = new Algorithm(BFSFunc, gridpls)

function BFSFunc(cells) {
    let s = this.start;
    let g = this.goal;
    console.log(s,g)
}

BFS.walk(gridpls)