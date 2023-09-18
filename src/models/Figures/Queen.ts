import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { FigureNames, Figures } from "./Figures";
import blackQueen from '../../assets/black-queen.png'
import whiteQueen from '../../assets/white-queen.png'

export class Queen extends Figures {
    constructor(color:Colors, cell:Cell) {
        super(color, cell)
        this.name = FigureNames.QUEEN
        this.logo = color === Colors.BLACK ? blackQueen : whiteQueen
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target)){
            return false
        }

        if(this.cell.isEmptyVertical(target)){
            
            return true
        }

        if(this.cell.isEmptyHorizontal(target)) {
            return true
        }

        if (this.cell.isEmptyDiagonal(target)) {
            return true
        }

        return false
    }
}