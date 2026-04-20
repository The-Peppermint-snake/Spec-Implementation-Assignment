//TO-DO
    //make grid from html
    //add event isners
        //on update
            //grid x&y
            //start x&y
            //goal x&y
        //on click
            //walls -> true
    //change colors of td objects
        //walls -> black
        //visited -> yellow
        //pathtaken -> orange
        //goal -> red
        //start ->green
    //BFS function

//from HTML
const gridXHTML = parseInt(document.getElementById("gridX"),10);
const gridYHTML = parseInt(document.getElementById("gridY"),10);
const startXHTML = parseInt(document.getElementById("startX"),10);
const startYHTML = parseInt(document.getElementById("startY"),10);
const goalXHTML = parseInt(document.getElementById("goalX"),10);
const goalYHTML = parseInt(document.getElementById("goalY"),10);
const table = document.getElementById("table");

//array of array of node objects
let cells = []

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
        }
        if(this.visted == true) {
            //change color to yellow
        }
        if(this.pathTaken == true) {
            //change color to orange
        }
    }
}

class Algorithm {
    constructor(walk) {
        this.start = cells[startXHTML,startYHTML];
        this.goal = cells[goalXHTML,goalYHTML];
        this.walk = walk;
    }
}


BFS = new Algorithm(BFSFunc())

function BFSFunc(s,g) {

}

function makeGrid(gridX,gridY) {
    console.log(1)
        for(let y = 0; y < gridY; y++) {
            let tableRow = table.insertRow(-1);
            let rows = [];
            console.log(2)
            for(let x = 0; x < gridX; x++) {
                let node = new Node(x,y);
                node.element = tableRow.insertCell();
                rows.push(node);
                console.log(3)
            }
            cells.push(rows);
        }
}

console.log(4)
makeGrid(gridXHTML,gridXHTML);