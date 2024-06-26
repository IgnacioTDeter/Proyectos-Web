
import { Board } from './Board.jsx';
import { LetterKeyboard } from './Keyboard.jsx';
import './App.css';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { BoardDefault } from "./Words.jsx";
import { FinalBoard } from "./finalBoard";
import Confetti from 'react-confetti'
import { generate, count } from "random-words";


export const AppContext = createContext();

  var randomWord = generate({ exactly: 1, minLength:5, maxLength: 5, formatter: (word) => word.toUpperCase() });
  const finalWord = randomWord.toString()
  console.log(finalWord)

export function App() {
  const [board, setBoard] = useState(BoardDefault); //board = BoardDefault. 
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0, gameOver: 0 }) //Objeto currAttempt

  
  
  /* ESTE CODIGO FUNCIONA PARA SABER EL ESTADO DE CURRATTEMPT 
  useEffect(() => {
    console.log(currAttempt);
  }, [currAttempt]); // Este efecto se activa cada vez que currAttempt cambia
*/

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4 || currAttempt.gameOver === 1) return;

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
    if (currAttempt.letterPos !== 5 || currAttempt.gameOver === 1) return;


    const subMatriz = BoardDefault[currAttempt.attempt].slice(0, 5); //conseguimos todas las letras del intento (currAtempt.attempt)
    const palabra = subMatriz.join(""); //Unimos las letras que puso el usuario

    if (palabra === finalWord) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0, gameOver: 1 })
      confetti()

    }
    else if (palabra !== finalWord && currAttempt.attempt === 4) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0, gameOver: 2 })

    }
    else {
      setCurrAttempt({ ...currAttempt, attempt: currAttempt.attempt + 1, letterPos: 0 })

    }

  }



  return (

    <body>

      {
        currAttempt.gameOver > 0 ? <FinalBoard gameValue={currAttempt.gameOver} finalWord={finalWord} />
          : null
      }
      {
        currAttempt.gameOver === 1 ? <Confetti/> : null
      }
      <main className='container-main'>

        <div className="general-container">
          <h1 className='wd-title'> Bienvenido a Wordle </h1>
          <span className='wd-title-span'> Descubre la palabra escondida </span>

          <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onDelete, onSelectLetter, onEnter, finalWord }}> {/* 
     Se pasa el estado de board. El estado de currAttempt y las funciones basicas del wordle (eliminar, enter y seleccionar letra)
     */}

            <Board />
            <LetterKeyboard />
          </AppContext.Provider>
        </div>

      </main>
    </body>

  )
}




