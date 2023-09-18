import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { FigureNames, Figures } from "./Figures";
import blackBeeshop from '../../assets/black-bishop.png'
import whiteBeeshop from '../../assets/white-bishop.png'

export class Bishop extends Figures {
    constructor(color: Colors, cell:Cell) {
        super(color, cell) 
            this.name = FigureNames.BEESHOP
            this.logo = color === Colors.BLACK ? blackBeeshop : whiteBeeshop
        
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target)){
            return false
        }

        if (this.cell.isEmptyDiagonal(target)) {
            return true
        }

        return false
    }
}