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


  debugger;
  document.getElementsByClassName("sudokuInputArea")[0].appendChild(solutionTable);

  console.table(result);

  debugger;

}