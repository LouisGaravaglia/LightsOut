function Board(nrows, ncols) {
  
    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
    function createBoard() {
      let initialBoard = [];
      const values = [0, ".", 0, 0, 0, 0, 0, 0, 0];
      const genRandomNum = () => {
        return Math.floor((Math.random() * values.length))
      }
      for (let i = 0; i < ncols; i++) {
        const innerArray = []
        for (let i = 0; i < nrows; i++) {
          innerArray.push(values[genRandomNum()])
        }
        initialBoard[i] = innerArray;
      }
      return initialBoard;
    }
}

