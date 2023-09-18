import { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
    cell: Cell,
    selected: boolean,
    selectCell: (cell:Cell) => void
}

const CellComponent: FC <CellProps> = ({cell, 
    selectCell,
    selected
}) => {

    // console.log(cell.available)

    return (
        <div
        onClick={() => selectCell(cell)}
        className={`cell ${cell.color} 
        ${selected}
        
        ${cell.available && cell.figure && 'enenmy'}
        `}
        // Просто передаём значение селектед как селектор класса и классу true в css присваиваем какой-то цвет
        key={cell.id}
        // style={{backgroundColor: cell.available && cell.figure ? 'green' : ''}}
        >
            <>
            {/* {cell.available ? 'true' : 'false'} */}
            {/* 
            <br></br>
            {cell.figure?.name}
            <br></br>
            {'x:' + cell.x + "y: " + cell.y} */}


            </>
            {cell.available && !cell.figure
            ? <div className='available'/> : ''}

            
            {cell.figure?.logo && <>
                <img className="figure-logo" src={cell.figure.logo} alt=""/> 
                


            </>}
        </div>
        //Если ячейка доступна и на ней нет фигуры, мы должны отрисовать точку
    )
}

export default CellComponent

// При клике на ячейку мы должны обозначать её выделенной. Можно ли было реализовать такое через наличие поля isChosen или лучше как в видео создать состояние выделенной ячейки и ей присвоить выделенную ячейку.