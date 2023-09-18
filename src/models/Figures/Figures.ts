import { Cell } from "../Cell";
import { Colors } from "../Colors";
import  logo from './assets/blackPawn.png'
export enum FigureNames {
    PAWN = 'пешка',
    KING = 'король',
    QUEEN = 'королева',
    KNIGHT = 'офицер',
    ROOK = 'ладья',
    BEESHOP = 'слон',
    FIGURE = 'фигура'
}

export class Figures {
    color: Colors
    logo:typeof logo
    cell:Cell
    name: FigureNames
    id: number
    firstStep: boolean

    constructor(color:Colors, cell:Cell) {
        this.firstStep = true
        this.cell = cell
        this.name = FigureNames.FIGURE
        this.cell.figure = this
        this.color = color
        this.id = Math.floor(Math.random() * 10000)
    }

    public canMove(target: Cell): boolean{
        // if (target.figure?.color === this.color) {
        //     return false
        // }
        // if (target.figure?.name === FigureNames.KING) {
        //     return false
        // }
        // Попробуем сделать так, чтобы доступными были только ближние ячейки
        if(target.figure?.color == this.color || target.figure?.name == FigureNames.KING) {
        //     // console.log('lk')
        //     // console.log(target.x == this.cell.x + 1, target)
            return false
        }
        // console.log('false', target)
        return true
    }

    moveFigure(target:Cell) {

    }

    
}