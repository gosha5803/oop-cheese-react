import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { FigureNames, Figures } from "./Figures";
import blackRook from '../../assets/black-rook.png'
import whiteRook from '../../assets/white-rook.png'

export class Rook extends Figures {
    constructor(color:Colors, cell:Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackRook : whiteRook
        this.name = FigureNames.ROOK
    }

    canMove(target: Cell):boolean {
        if(!super.canMove(target))
        // console.log(target)
        
            return false
        
        if(this.cell.isEmptyVertical(target)){
            
            return true
        }

        if(this.cell.isEmptyHorizontal(target)) {
            return true
        }

        return false
    }
}