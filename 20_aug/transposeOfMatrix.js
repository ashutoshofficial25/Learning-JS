const printTranspose = (matrix) => {
  let r = matrix.length;
  let c = matrix[0].length;

  let transArray = [];

  for (let i = 0; i < r; i++) {
    let result = "";
    transArray[i] = [];
    for (let j = 0; j < c; j++) {
      transArray[i][j] = matrix[j][i];
      result += matrix[j][i];
    }
    console.log(result);
  }
  console.log(transArray);
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
printTranspose(matrix);


let output = [];
    
for(let i = 0; i<c; i++) {      
    output[i] = [];  
    for(let  j =0; j < r; j++) {
        output[i][j] = matrix[j][i];
    }
}

console.log(output);
}

printTranspose([
[1,2],
[4,5],
[7,8]