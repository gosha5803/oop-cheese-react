import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { FigureNames, Figures } from "./Figures";
import blackPawn  from '../../assets/black-pawn.png'
import whitePawn  from '../../assets/white-pawn.png'


export class Pawn extends Figures {

    constructor(color:Colors, cell:Cell) {
        super(color, cell)
        this.name = FigureNames.PAWN
        this.logo = color === Colors.BLACK ? blackPawn : whitePawn
        
    }

    isEmptyPawn(target:Cell) {

        // console.log(target)
        
        const absY = Math.abs(this.cell.y - target.y)
        const absX = Math.abs(this.cell.x - target.x)
        const dx = this.color == Colors.WHITE ? 1 : -1
        if(this.cell.y !== target.y) {
            const offSetY = this.cell.x - target.x
            if(
                absX == absY 
                && offSetY * dx == 1
                && target.figure
                ){
                console.log(target.x, target.y, this.cell.x, this.cell.y)
                return true
            }
            return false
        }

        // console.log(dx)

        if (
            (this.cell.x == target.x + dx) 
            && !target.figure
            || (
                this.firstStep &&
                (this.cell.x == target.x + 2 * dx)
            && !target.figure
            )
            ) {
                for (let i = 1; i < absX; i++) {
                    console.log(target.board.getCell(this.cell.x + i, this.cell.y))
                    if (!target.board.getCell(this.cell.x + i * -dx, this.cell.y).isEmpty()) {
                        console.log(absX)
                        return false
                    }
                }
                console.log(target)
                return true
        }



        return false
    }

    canMove(target:Cell): boolean {
        if(!super.canMove(target))
            return false

        if(!this.isEmptyPawn(target)) {
            return false
        }
        
        return true
    }
}
