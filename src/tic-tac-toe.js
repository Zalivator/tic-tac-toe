class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.field = [[null, null, null],
                      [null, null, null],
                      [null, null, null]];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null){
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if(this.currentPlayerSymbol == 'x') {
                this.currentPlayerSymbol =  'o';
            }
            else {
                this.currentPlayerSymbol = 'x';
            }
        }
        return null;
    }

    isFinished() {
        if(this.isDraw() || this.getWinner()){
            return true;
        }
        return false;
    }

    getWinner() {
        if((this.field[0][0] == 'x' && this.field[0][1] == 'x' && this.field[0][2] == 'x') ||
            (this.field[1][0] == 'x' && this.field[1][1] == 'x' && this.field[1][2] == 'x') ||
            (this.field[2][0] == 'x' && this.field[2][1] == 'x' && this.field[2][2] == 'x') ||
            (this.field[0][0] == 'x' && this.field[1][0] == 'x' && this.field[2][0] == 'x') ||
            (this.field[0][1] == 'x' && this.field[1][1] == 'x' && this.field[2][1] == 'x') ||
            (this.field[0][2] == 'x' && this.field[1][2] == 'x' && this.field[2][2] == 'x') ||
            (this.field[0][0] == 'x' && this.field[1][1] == 'x' && this.field[2][2] == 'x') ||
            (this.field[2][0] == 'x' && this.field[1][1] == 'x' && this.field[0][2] == 'x')){
                return 'x';
            }
        if((this.field[0][0] == 'o' && this.field[0][1] == 'o' && this.field[0][2] == 'o') ||
            (this.field[1][0] == 'o' && this.field[1][1] == 'o' && this.field[1][2] == 'o') ||
            (this.field[2][0] == 'o' && this.field[2][1] == 'o' && this.field[2][2] == 'o') ||
            (this.field[0][0] == 'o' && this.field[1][0] == 'o' && this.field[2][0] == 'o') ||
            (this.field[0][1] == 'o' && this.field[1][1] == 'o' && this.field[2][1] == 'o') ||
            (this.field[0][2] == 'o' && this.field[1][2] == 'o' && this.field[2][2] == 'o') ||
            (this.field[2][0] == 'o' && this.field[1][1] == 'o' && this.field[0][2] == 'o') ||
            (this.field[0][0] == 'o' && this.field[1][1] == 'o' && this.field[2][2] == 'o')){
               return 'o';
            }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (this.field[i][j] == null){
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if(this.getWinner() == null && this.noMoreTurns()){
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
