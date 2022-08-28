//Exercise of codewars
function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))){
      sq++
      while (!Number.isInteger(Math.sqrt(sq))){
        sq++
      }
      return sq
    }else{
      return -1;
    }
  }

console.log(findNextSquare(155))