var solveThePuzzle = function(){
  var work = [];
  var addTimes = 9;

  // creates empty matrix
  while (addTimes--){
    work.push([]);
  }

  // value of matrix to add starting from top left going to
  // bottom right
  var valueOfMatrix = 1;
  var currID;

  for (var i = 0; i < 9; i++){
    for (var j = 0; j < 9; j++){
      currID = "numberValue" + valueOfMatrix.toString();
      work[i].push(Number(document.getElementById(currID).value))
      valueOfMatrix++;
    }
  }

  var result = sudoku(work);

  var solutionTable = document.createElement("TABLE");
  solutionTable.setAttribute("border", "1px black");
  solutionTable.style.width = "200px";
  solutionTable.className = "tableItself";

  var containingDiv = document.createElement("DIV");
  containingDiv.appendChild(solutionTable);

  for (var i = 0; i < result.length; i++){
    var row = solutionTable.insertRow(i);
    for (var j = 0; j < result.length; j++){
      var item = row.insertCell(j);
      item.innerHTML = result[i][j];
    }
  }

  containingDiv.className = "solutionCenter"


  document.body.appendChild(containingDiv);

  debugger;

}

var examplePuzzleSolve = function(){

  var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

  var result = sudoku(puzzle);

  var solutionTable = document.createElement("TABLE");
  solutionTable.setAttribute("border", "1px black");
  solutionTable.style.width = "200px";
  solutionTable.className = "tableItself";

  var containingDiv = document.createElement("DIV");
  containingDiv.appendChild(solutionTable);

  for (var i = 0; i < result.length; i++){
    var row = solutionTable.insertRow(i);
    for (var j = 0; j < result.length; j++){
      var item = row.insertCell(j);
      item.innerHTML = result[i][j];
    }
  }

  containingDiv.className = "solutionCenter"


  document.body.appendChild(containingDiv);

  debugger;

}