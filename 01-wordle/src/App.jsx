
import { Board } from './Board.jsx'
import { LetterKeyboard } from './Keyboard.jsx'
import './App.css'

export function App() {

  return (
    <main className='container-main'>
      <h1 className='wd-title'> Bienvenido a Wordle </h1>
      <span className='wd-title-span'> Descubre la palabra escondida </span>
        
      <Board />


      <article className='wd-keyboard-container'>
        <div className="row" >
          <LetterKeyboard letterValue="Q" />
          <LetterKeyboard letterValue="W" />
          <LetterKeyboard letterValue="E" />
          <LetterKeyboard letterValue="R" />
          <LetterKeyboard letterValue="T" />
          <LetterKeyboard letterValue="Y" />
          <LetterKeyboard letterValue="U" />
          <LetterKeyboard letterValue="I" />
          <LetterKeyboard letterValue="O" />
          <LetterKeyboard letterValue="P" />
        </div>
        <div className="row">
          <LetterKeyboard letterValue="A" />
          <LetterKeyboard letterValue="S" />
          <LetterKeyboard letterValue="D" />
          <LetterKeyboard letterValue="F" />
          <LetterKeyboard letterValue="G" />
          <LetterKeyboard letterValue="H" />
          <LetterKeyboard letterValue="J" />
          <LetterKeyboard letterValue="K" />
          <LetterKeyboard letterValue="L" />
          <LetterKeyboard letterValue="Ñ" />
        </div>

        <div className="row">
          <div className="button-letter special-letter">Enter</div>
          <LetterKeyboard letterValue="Z" />
          <LetterKeyboard letterValue="X" />
          <LetterKeyboard letterValue="C" />
          <LetterKeyboard letterValue="V" />
          <LetterKeyboard letterValue="B" />
          <LetterKeyboard letterValue="N" />
          <LetterKeyboard letterValue="M" />
          <div className="button-letter special-letter">Borrar</div>
        </div>
      </article>



    </main>
  )
}


