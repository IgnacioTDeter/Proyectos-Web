import React,{ useContext } from "react";
import { AppContext } from "./App";


export function Letter({ letterPos, attemptVal }){
    
    const { board } = useContext(AppContext) //Traemos board desde el AppContext
    const letter = board[attemptVal][letterPos] //Decimos que la letra es igual a la posicion [x][y] por que es una matriz
    return(
        <div className="wd-input-cell">
            {letter} 
        </div>
        
    )
}