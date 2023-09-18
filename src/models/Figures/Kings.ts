import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { FigureNames, Figures } from "./Figures";
import blackKing from '../../assets/black-king.png'
import whiteKing from '../../assets/white-king.png'
export class King extends Figures {
    constructor(color:Colors, cell:Cell) {
        super(color, cell)
        this.name = FigureNames.KING
        this.logo = color === Colors.BLACK ? blackKing : whiteKing}

        public canMove(target: Cell): boolean {
            if (!super.canMove(target)) {
                return false
            }

            if(!this.cell.isEmptyKing(target)) {
                return false
            }

            return true
        }
}