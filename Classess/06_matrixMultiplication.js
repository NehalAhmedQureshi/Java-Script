let matrix1 = [
    [1,2,3],
    [5,6,7],
    [6,8,9],
]

let matrix2 = [
    [0,1,6],
    [5,4,7],
    [6,2,9],
]

for (let i = 0; i < 3 ; i++) {
    for (let j = 0; j < 3; j++) {
        

        // console.log(matrix1[i][j] + matrix2[i][j]); // matrix addition

        console.log(matrix1[i][j] * matrix1[i][j]); // matrix multiplication

        
        // console.log(j);
    }
    
}