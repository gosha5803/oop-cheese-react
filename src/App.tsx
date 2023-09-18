import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Borad';

function App() {
  const [board, setBoard] = useState(new Board())

    useEffect(() => {
        setup()
    },[])
    // В лайфсайкл хуке мы вызывем функцию, которая инициализирует шахматную доску и расставляет фигуры
    const setup = () => {
        const board0 = new Board()
        board0.initCells()
        // На этой строке мы инициализируем все ячейки, то есть создаём двумерный массив, в каждую ячейку которого вставляем новый образец клетки, с определёнными параметрами.
        board0.addFigures()
        // На данной строке мы расставляем фигуры. Также с помощбю иетода самого инстанса доски класса доска.
        setBoard(board0)
    }

  return (
    <div className="App container">
      <BoardComponent
      board={board}
      setBoard={setBoard}
      />
    </div>
  );
}

export default App;
