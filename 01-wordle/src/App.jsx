
import { Board } from './Board.jsx';
import { LetterKeyboard } from './Keyboard.jsx';
import './App.css';
import { createContext, useState, useTransition } from 'react';
import { BoardDefault } from "./Words.jsx";
export const AppContext = createContext();

export function App() {
  const [board, setBoard] = useState(BoardDefault); //board = BoardDefault. 
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 }) //Objeto currAttempt

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;

    const newBoard = [...board]; //Shallow copy del estado board
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal; //Esto es lo mismo que decir newBoard[2][3], ya que es una matriz. Establecemos el valor de keyVal.
    setBoard(newBoard); //Cambiamos el valor de board por el de newBoard
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 }) //Cambia valores del objeto currAttempt
  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
  }

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })
  }

  return (
    <main className='container-main'>
      <h1 className='wd-title'> Bienvenido a Wordle </h1>
      <span className='wd-title-span'> Descubre la palabra escondida </span>

      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onDelete, onSelectLetter, onEnter }}> {/* 
      Se pasa el estado de board. El estado de currAttempt y las funciones basicas del wordle (eliminar, enter y seleccionar letra)
      */}
        <Board /> 
        <LetterKeyboard />
      </AppContext.Provider>
    </main>
  )
}




