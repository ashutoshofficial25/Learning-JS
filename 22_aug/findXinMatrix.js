const findx = (matrix, x) => {
  let row = matrix.length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == x) {
        return "found";
      }
    }
  }
  return "not-Found";
};

let matrix = [
  [1, 0, 0],
  [0, 2],
  [9, 0, 1],
  [9, 0, 1, 5, 6],
];
let ans = findx(matrix, 6);
console.log(ans);

const findx2 = (matrix, x) => {
  let rows = matrix.length - 1;
  let cols = matrix[0].length - 1;

  for (let i = 0; i <= rows && mat[i][cols] < x; i++) {

    if(i<= rows){
      for(let j = i; j)

    }else{
      return false
    }
  
  
  }


};




function findd(mat, x) {
  let rows = mat.length-1;
  let columns = mat[0].length-1;

  let i =0;
  for(; i<=rows && mat[i][columns]<=x; i++);

  if(i<=rows) {
      // for(; i <= rows; i++) {
      //     for(let j = columns; j>=0; j--) {
      //         if(mat[i][j] == x) {
      //             return true;
      //         } else if(mat[i][j]<x) {
      //             break;
      //         }
      //     }
      // }
      let  j = columns;
      while(i<=rows && j>=0) {
          if(mat[i][j] == x) {
              return true;
          }
          if(mat[i][j] > x) {
              j--;
          } else {
              i++;
          }
      }
  }
  return false;
}




function finde(mat, x) {
  let rows = mat.length-1;
  let columns = mat[0].length-1;

      let i = 0;
      let  j = columns;
      while(i<=rows && j>=0) {
          if(mat[i][j] == x) {
              return true;
          }
          if(mat[i][j] > x) {
              j--;
          } else {
              i++;
          }
      }
  
  return false;
}