import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { FigureNames, Figures } from "./Figures";
import blackKnight from '../../assets/black-knight.png'
import whiteKnight from '../../assets/white-knight.png'
export class Knight extends Figures {
    constructor(color:Colors, cell:Cell) {
        super(color, cell)
        this.name = FigureNames.KNIGHT
        this.logo = color === Colors.BLACK ? blackKnight : whiteKnight
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target)){
            return false
        }

        if(!this.cell.isEmptyKnight(target)){
            return false
        }
        
        return true
    }
}