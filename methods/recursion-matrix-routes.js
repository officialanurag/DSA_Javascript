/**
 * Count different routes to reach [0][0] -> [m][n]
 * Input: 2D Array
 *  [
 *      [1, 2, 3],
 *      [4, 5, 6],
 *      [7, 8, 9]
 *  ]
 * 
 * Output: 
 *  Routes:
 *      1 -> 2 -> 3 -> 6 -> 9
 *      1 -> 2 -> 5 -> 6 -> 9
 *      1 -> 2 -> 5 -> 8 -> 9
 *      1 -> 4 -> 5 -> 6 -> 9
 *      1 -> 4 -> 5 -> 8 -> 9 
 *      1 -> 4 -> 7 -> 8 -> 9
 *  Count: 6
 */

let count = 0;

function findPath(matrix, m, n, index1, index2) {
    if (index1 < m && index2 < n) {
        
        if ((index1 === m - 1) && (index2 === n - 1)) {
            count++;
        }
    }

    if (index1 < m) {
        findPath(matrix, m, n, index1 + 1, index2);
    }

    if (index2 < n) {
        findPath(matrix, m, n, index1, index2 + 1);
    }
}

const inputMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

findPath(inputMatrix, inputMatrix[0].length, inputMatrix.length, 0, 0);
console.log(count)