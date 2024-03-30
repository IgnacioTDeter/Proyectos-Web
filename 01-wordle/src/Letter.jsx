import React,{ useContext } from "react";
import { AppContext } from "./App";


export function Letter({ letterPos, attemptVal }){
    
    const { board } = useContext(AppContext) 
    const letter = board[attemptVal][letterPos]
    return(
        <div className="wd-input-cell">
            {letter} 
        </div>
        
    )
}