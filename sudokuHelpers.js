// http://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript

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

var findAvailableNumInRow = function(row){
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function(value){return row.indexOf(value) > -1});
}

var findAvailableNumInCol = function(puzzle, rowIndex){
  var work = [];
  for (var i = 0; i < 9; i++){
    work.push(puzzle[i][rowIndex]);
  }
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function(value){return work.indexOf(value) > -1});
}

var findAvailableNumInBox = function(puzzle, colIndex, rowIndex){
  var startY = (colIndex < 3)? 0 : (colIndex < 6)? 3: 6;
  var startX = (rowIndex < 3)? 0 : (rowIndex < 6)? 3: 6;
  var work = [];
  for (var i = startY; i < startY + 3; i++){
    for (var j = startX; j < startX + 3; j++){
      work.push(puzzle[i][j]);
    }
  }
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function(value){return work.indexOf(value) > -1});
}

var findMissingNumForPoint = function(puzzle, colIndex, rowIndex){
  var work = findAvailableNumInRow(puzzle[colIndex]);
  work = work.concat(findAvailableNumInCol(puzzle, rowIndex));
  work = work.concat(findAvailableNumInBox(puzzle, colIndex, rowIndex));
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function(value){return work.indexOf(value) === -1});
}

// probably don't really need to use this
var removeDuplicatesFromArray = function(array){
  var work = {};
  array.map(function(value){work[value] = true});
  return Object.keys(work).map(function(value){return Number(value)});
}

var isNotSolved = function(puzzle){
  var check = false;
  puzzle.map(function(row){row.map(function(value){if (value === 0){check = true;}})});
  return check;
}

function sudoku(puzzle) {
  var work;
  var countCheck = 1;

  while (isNotSolved(puzzle)){
    if (countCheck > 81){
      break;
    }
    for (var colIndex = 0; colIndex < puzzle.length; colIndex++){
      for (var rowIndex = 0; rowIndex < puzzle[colIndex].length; rowIndex++){
        if (puzzle[colIndex][rowIndex] === 0){
          work = findMissingNumForPoint(puzzle, colIndex, rowIndex);
          if (work.length === 1){
            puzzle[colIndex][rowIndex] = work[0];
          }
        }
      }
    }
    countCheck++;
  }
  return puzzle;
}

