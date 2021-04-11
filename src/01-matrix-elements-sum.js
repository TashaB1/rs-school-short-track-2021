/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let rez = 0;

  const m = matrix.length;
  const n = matrix[0].length;
  const matrixT = [];

  for (let i = 0; i < n; i++) {
    matrixT[i] = [];
    for (let j = 0; j < m; j++) {
      matrixT[i][j] = matrix[j][i];
    }
  }

  for (let i = 0; i < matrixT.length; i++) {
    for (let j = 0; j < matrixT[i].length; j++) {
      if (matrixT[i][j] > 0) {
        rez += matrixT[i][j];
      } else {
        break;
      }
    }
  }

  return rez;
}

module.exports = getMatrixElementsSum;
