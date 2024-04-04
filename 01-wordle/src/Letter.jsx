import React,{ useContext } from "react";
import { AppContext } from "./App";


export function Letter({ letterPos, attemptVal,  }){
    
    const { board, finalWord, currAttempt } = useContext(AppContext) //Traemos board desde el AppContext
    const letter = board[attemptVal][letterPos] //Decimos que la letra es igual a la posicion [x][y] por que es una matriz

    const correct = finalWord[letterPos] === letter ;
    const almost = !correct && letter !== "" && finalWord.includes(letter);
    

    const resultLetter = () =>{
    if(currAttempt.attempt > attemptVal  ){
        if(correct){
            return "correct"
        }
        else if(almost){
            return "almost"
        }
        else{
            return "wrong"
        }
    }
       
    }

    return(
        <div className="wd-input-cell" id={resultLetter()}>
            {letter} 
        </div>
        
    )
}