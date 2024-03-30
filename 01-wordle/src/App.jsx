
import { Board } from './Board.jsx';
import { LetterKeyboard } from './Keyboard.jsx';
import './App.css';
import { createContext, useState, useTransition } from 'react';
import { BoardDefault } from "./Words.jsx";
export const AppContext = createContext();

export function App() {
  const [board, setBoard] = useState(BoardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0})

  const onSelectLetter = (keyVal) =>{
    if(currAttempt.letterPos > 4) return;

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
  }
  
  const onDelete = () =>{
    if(currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
  }

  const onEnter = () =>{
    if( currAttempt.letterPos !== 5) return;
    setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0})
  }

  return (
    <main className='container-main'>
      <h1 className='wd-title'> Bienvenido a Wordle </h1>
      <span className='wd-title-span'> Descubre la palabra escondida </span>

      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onDelete, onSelectLetter, onEnter }}>
        <Board />
        <LetterKeyboard />
      </AppContext.Provider>
    </main>
  )
}




