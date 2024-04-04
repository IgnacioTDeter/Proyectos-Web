
import { Board } from './Board.jsx';
import { LetterKeyboard } from './Keyboard.jsx';
import './App.css';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { BoardDefault } from "./Words.jsx";
export const AppContext = createContext();

export function App() {
  const [board, setBoard] = useState(BoardDefault); //board = BoardDefault. 
  const [ currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0, gameOver: 0  }) //Objeto currAttempt

  const finalWord = "PERRO";

  /* ESTE CODIGO FUNCIONA PARA SABER EL ESTADO DE CURRATTEMPT 
  useEffect(() => {
    console.log(currAttempt);
  }, [currAttempt]); // Este efecto se activa cada vez que currAttempt cambia
*/

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4 || currAttempt.gameOver === 1 ) return;

    const newBoard = [...board]; //Shallow copy del estado board
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal; //Esto es lo mismo que decir newBoard[2][3], ya que es una matriz. Establecemos el valor de keyVal.
    setBoard(newBoard); //Cambiamos el valor de board por el de newBoard
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 }) //Cambia valores del objeto currAttempt
  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0 || currAttempt.gameOver === 1) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
  }

  const onEnter = () => {
    if (currAttempt.letterPos !== 5 || currAttempt.gameOver === 1 ) return;
    

    const subMatriz = BoardDefault[currAttempt.attempt].slice(0, 5); //conseguimos todas las letras del intento (currAtempt.attempt)
    const palabra = subMatriz.join(""); //Unimos las letras que puso el usuario

    if (palabra === finalWord) { 
        alert("U win!");
        setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0, gameOver: 1 })
        console.log(currAttempt)
    }
    else{
      setCurrAttempt({...currAttempt, attempt: currAttempt.attempt + 1, letterPos: 0 })
      
    }


  }

  return (
    <main className='container-main'>
      <h1 className='wd-title'> Bienvenido a Wordle </h1>
      <span className='wd-title-span'> Descubre la palabra escondida </span>

      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onDelete, onSelectLetter, onEnter, finalWord }}> {/* 
      Se pasa el estado de board. El estado de currAttempt y las funciones basicas del wordle (eliminar, enter y seleccionar letra)
      */}
        <Board /> 
        <LetterKeyboard />
      </AppContext.Provider>
¿
    </main>
  )
}




