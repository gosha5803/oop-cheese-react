import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./Figures/Bishop";
import { Figures } from "./Figures/Figures";
import { King } from "./Figures/Kings";
import { Knight } from "./Figures/Knight";
import { Pawn } from "./Figures/Pawn";
import { Queen } from "./Figures/Queen";
import { Rook } from "./Figures/Rook";

export class Board {
    Cells:Cell[][] = []
    lostBlackFigures: Figures[] = []
    lostWhiteFigures: Figures[] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            let row:Cell[] = []
            for (let j = 0; j < 8; j++) {
                if((j + i) % 2 === 0) {
                    row.push(new Cell(this, i, j, Colors.BLACK, false, null))
                } else {
                    row.push(new Cell(this, i, j, Colors.WHITE, false, 
                        null))
                }
            }
            this.Cells.push(row)
        }
    }

    // В этом методе мы определяем значение поля ячейки, создавай 64 новых инстанса ячейки, каждый из которых отличается координатами и каждая вторая отличается цветом. Стоит отметить, что у ячейки есть поле board, в которой мы указываем клбчевое слово зис, указывая на контекст данного класса доски, а сама доска имеет в своих полях все ячейки. Таким образом, мы имеем тут уольцевую зависимость.

    public getCell(x: number, y: number) {
        return this.Cells[x][y]
    }
    //Этот метод необходим для получения ячеек по их координатамЮ например для расстановки фигур


    public setPawns () {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(1, i))
            new Pawn(Colors.WHITE, this.getCell(6, i))
        }
    }

    public setBishops () {
        new Bishop(Colors.BLACK, this.getCell(0, 2))
        new Bishop(Colors.BLACK, this.getCell(0, 5))
        new Bishop(Colors.WHITE, this.getCell(7, 5))
        new Bishop(Colors.WHITE, this.getCell(7, 2))
    }

    setQueens() {
        new Queen(Colors.BLACK, this.getCell(0, 4))
        new Queen(Colors.WHITE, this.getCell(7, 4))
    }

    setKings() {
        new King(Colors.BLACK, this.getCell(0, 3))
        new King(Colors.WHITE, this.getCell(7, 3))
    }

    public setKnights() {
        new Knight(Colors.BLACK, this.getCell(0,1))
        new Knight(Colors.BLACK, this.getCell(0,6))
        new Knight(Colors.WHITE, this.getCell(7,6))
        new Knight(Colors.WHITE, this.getCell(7,1))
    }

    public setRooks() {
        new Rook(Colors.BLACK, this.getCell(0,0))
        new Rook(Colors.BLACK, this.getCell(0,7))
        new Rook(Colors.WHITE, this.getCell(7,0))
        new Rook(Colors.WHITE, this.getCell(7,7))
    }

    public copyBoard() {
        const newBoard = new Board()
        newBoard.Cells = this.Cells
        newBoard.lostBlackFigures = this.lostBlackFigures
        newBoard.lostWhiteFigures = this.lostWhiteFigures
        
        return newBoard    
    }

    // public highLightCells(selectedCell: Cell | null) {
    //     for (let i = 0; i < this.Cells.length; i++) {
    //         const row = this.Cells[i]
    //         for(let j = 0; j < row.length; j++) {
    //             const target = row[j]
    //             target.available = !!selectedCell?.figure?.canMove(target)
    //         }
    //     }
    // }

// именно хайлайт целлс нужен для того, чтобы кружочками выделить доступные клетки, он проходится вообще по всем и что делает?

// Меняет флаг эвейлибл?

    highLightcells(cell:Cell) {
        for (let i = 0; i < 8; i++) {
            let row: Cell[] = this.Cells[i]
            for (let j = 0; j < row.length; j++) {
                if (cell?.figure?.canMove(row[j])){
                    // console.log(this.Cells[i][j])
                    this.Cells[i][j].available = true
                    continue
                }
                this.Cells[i][j].available = false
            }
        }
        // console.log(cell, this.Cells[cell.x + 1][cell.y + 1])
    }

    hideAvailable(){
        for(let i = 0; i < 8; i++) {
            // let row: Cell[] = this.Cells[i]
            for (let j = 0; j < 8; j++) {
                this.Cells[i][j].available = false
                }
        }
    }
    //Тут я имею ай и джей как координаты ячейки в двумерном массиве и в случае если у целевой ячейки, то есть у выбранной функция кэн мув отрабатывает по этой цели как тру, тогда в самой доске у данной ячейки надо поменять поле из авейлибл

    public addFigures() {
        this.setKings()
        this.setRooks()
        this.setKnights()
        this.setQueens()
        this.setPawns()
        this.setBishops()

    }
}

//итак у нас главный класс это доска в ней есть одно поле это ячейки - двумерный массив
{/*
ячейка класс, в котором есть поле фигура, а в фигуе есть поле ячейки 
конечный класс фигуры принимает как раз два параметра в свой конструктор ячейку, которую он получает методом гет cell и цвет, который просто определяет цвет
в ячейке фигура указана, чтобы именно при отрисовке ячейки обращаться к полю лого фигуры и доставать пнг для тега img 
*/}