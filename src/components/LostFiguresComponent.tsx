import React, { FC } from "react";
import { Figures } from "../models/Figures/Figures";

interface LostFiguresProps {
    blackFigures:Figures[],
    whiteFigures:Figures[],
}

const LostFigures: FC <LostFiguresProps> = ({blackFigures, whiteFigures}) => {
    return(
    
    <div
    className="lost-figures"
    >
        <div>
            <h3>Lost black</h3>
            <ul>
                {blackFigures.map(lost => 
                    <li 
                    key={lost.id}
                    >
                        {lost.name}
                        <img src={lost.logo}/>
                    </li>)}
            </ul>
        </div>
        <div>
        <h3>Lost white</h3>
            <ul>
                {whiteFigures.map(lost => 
                    <li 
                    key={lost.id}
                    >
                        {lost.name}
                        <img src={lost.logo}/>
                    </li>)}
            </ul>
        </div>
        
    </div> 
    )
}

export default LostFigures