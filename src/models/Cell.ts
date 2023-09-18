import { Board } from "./Borad"
import { Colors } from "./Colors"
import { FigureNames, Figures } from "./Figures/Figures"
import { Pawn } from "./Figures/Pawn"

export class Cell {
    readonly x: number
    readonly y: number
    color: string
    isActive:boolean
    id:number
    available:boolean
    figure:Figures | null
    board: Board
    
    // setFigure (figure: Figures) {
    //     this.figure = figure
    //     this.figure.cell = this
    // }

    constructor(board:Board, x:number, y:number, color:string, isActive:boolean, figure: Figures | null) {
        this.x = x
        this.figure = figure
        this.y = y
        this.board = board
        this.color = color
        this.isActive = isActive
        this.id = Math.floor(Math.random() * 10000)
        this.available = false
    }

    setFigure(figure: Figures) {
        this.figure = figure
        this.figure.cell = this
    }

    addLostFigure(figure:Figures) {
        figure.color == Colors.BLACK ?
        this.board.lostBlackFigures.push(figure)
        : this.board.lostWhiteFigures.push(figure)
        console.log(this.board.lostBlackFigures)
        
    }

    public moveFigure (target:Cell) {
        // console.log(target)
        // if(this.figure?.canMove(target)){
        //     // this.figure.moveFigure(target)
        //     // target.setFigure(this.figure)
        //     // this.figure = null
        // }
        if(target.available && this.figure){
            if(target.figure) {
                this.addLostFigure(target.figure)
                
            }


            target.setFigure(this.figure) 
            this.figure = null
        }
        if(target.figure?.name == FigureNames.PAWN){
            target.figure.firstStep = false  
        }

    }

    //Вообще проверка кэнМув пройдена клеткой, если поле эвейлибл из тру, может тогда, только по нему и переместить фигуру?

    //Когда есть выбранная клетка и происходит клик на другую клетку. Клик обрабатывается в selectCell. Там надо проверить, что цель клика не выбранная клетка и,Ю что там нет союзных фигур.

    //moveFigure метод, который должен отрабатывать движение фигуры. Целевая ячейка поступает в метод, данная ячейка является выбранной. Передвижении фигуры, это присвоение её целевой клетке и очищение её у родительской.

    isEmpty() {
        return this.figure === null 
    }

    isEmptyVertical(target:Cell):boolean {
        if (target.y !== this.y) {
            return false
        }
        
        const min = Math.min(this.x, target.x)
        const max = Math.max(this.x, target.x)

        for (let i = min + 1; i < max; i++) {
            const data = target.board.getCell(i, this.y)
            // console.log(data)
            if (!target.board.getCell(i, this.y).isEmpty()) {
                // console.log(data.x, data.y, data.figure)
                return false
            }
        }
        return true 

    }
    
    
    isEmptyHorizontal(target:Cell):boolean {
    if (target.x !== this.x) {
        return false
    }
    
    const min = Math.min(this.y, target.y)
    const max = Math.max(this.y, target.y)

    for (let i = min + 1; i < max; i++) {
        if (!target.board.getCell(this.x, i).isEmpty()) {
            return false
        }

    }

    return true
    }

    isEmptyDiagonal(target:Cell):boolean {
        const absX = Math.abs(this.x - target.x)
        const absY = Math.abs(this.y - target.y)

        
        if (absX !== absY) {
            return false
        }

        let dx = this.x < target.x ? 1 : -1
        let dy = this.y < target.y ? 1 : -1

        for (let i = 1; i < absX; i++){
            if (!this.board.getCell(this.x + i*dx, this.y + i*dy).isEmpty()) {
                return false
            }
        }
        return true
    }

    isEmptyKnight(target: Cell):boolean {
        const absX = Math.abs(this.x - target.x)
        const absY = Math.abs(this.y - target.y)
    
        if(
            absX  &&
            absY &&
              absX + absY === 3) {
            // console.log(this, target)
            return true
        }

        return false
    }

    isEmptyKing(target:Cell):boolean {
        const absX = Math.abs(this.x - target.x)
        const absY = Math.abs(this.y - target.y)

        if((absX + absY === 2 && absX
             && absY) || 
        absX + absY === 1 ){
            return true
        }

        return false
    }


}