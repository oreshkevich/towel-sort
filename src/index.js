
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == null) {
        var result = [];
    } else {
        result = [];
        matrix.forEach((row, index) => {
            const sortedRow = index % 2 === 0 ? row : row.reverse();
            sortedRow.forEach(val => {
                result.push(val);
            });
        });
    }
    return result;
    
}
