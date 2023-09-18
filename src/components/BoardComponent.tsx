import { FC, useEffect, useState } from "react";
import { Board } from "../models/Borad";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";
import { Colors } from "../models/Colors";

interface BoardProps {
    board: Board
    setBoard: (board:Board) => void
}

const BoardComponent: FC <BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    const [currentPlayer, setCurrentPlayer] = useState<Colors>(Colors.WHITE)

    // console.log(selectedCell)

    const selectCell = (cell:Cell) => {
        if(cell.figure?.color == currentPlayer){
            setSelectedCell(cell)   
        }
        
        if(selectedCell && selectedCell !== cell 
            // && (cell.available)
            ) 
            {

                    if(!cell.available) {

                        if(cell.figure?.color == currentPlayer) {
                            console.log(cell)
                            setSelectedCell(cell)
                            return
                        }
                        console.log(cell)
                        setSelectedCell(null)
                        return
                    }


            selectedCell.moveFigure(cell)
            console.log(selectedCell)
            setSelectedCell(null)
            console.log(selectedCell)
            setCurrentPlayer(currentPlayer == Colors.WHITE ? Colors.BLACK : Colors.WHITE)

        }
        
        // Проверка, если на клетке передаваемой в функцию нету фигуры, значит её нельзя назначить выбранной.
    }

    useEffect(() => {
        if (!selectedCell && board.Cells.length) {
            board.hideAvailable()
        }

        if (selectedCell){
            // console.log(selectedCell)
            board.highLightcells(selectedCell)
        }
        const newBoard = board.copyBoard()
        setBoard(newBoard)
        
        // setSelectedCell(selectedCell)
        //если внутри этого хука переопределить в конце выбранную ячейку, тогда осуществляется перерендер реакт компонента, и у нас отображается изменённая доска с доступными ячейками, то так как селектед переопределяется на нул, то подсветка выбранной яыейки удаляется. Можно попробовать переопределить её на саму себя

        //Если же мы не переопределяем выбранную ячейку, ререндеринга не происходит и доступные точки показываются на следующий ререндеринг, а выделенная область показывается уже активнаяя
        // Нам надо реРендерить компонент и при этом сохранять значения яячеек, это моэжно сделать переопределив саму доску, получим новый инстанс доски со старыми значениями ячеек из внутреннего метода копиБорд
    }, [selectedCell])


    //При каждом определении выбранной ячейки. Будет запускаться подсветка доступных ячеек

    // const highLightCells = () => {
    //     if(selectedCell)
    //     board.highLightcells(selectedCell)
    //     // setNewBoard()
    // }

    // const setNewBoard = () => {
    //     const newBoard = board.copyBoard()
    //     setBoard(newBoard)
    // }

    return(
        <div
        style={{
            display:'flex',
            flexDirection:'column'
        }}
        >
        <h1>Ход игрока: {currentPlayer}</h1>
        <div
        className="board"
        >
        {board.Cells.map(cellRow => cellRow.map(cell => 
            <CellComponent 
            selectCell={selectCell}
            key={cell.id} 
            cell={cell}
            selected={cell === selectedCell}
            // передаём в пропсы всех ячеек результат сравнения их самих с выбранной ячейкой
            />
            ))}                  
        </div>
        </div>
    )
}

export default BoardComponent