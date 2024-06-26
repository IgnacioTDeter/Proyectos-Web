import  Key  from './Key'
import React, {useCallback, useEffect, useContext} from 'react';
import { AppContext } from "./App"


export function LetterKeyboard({ letterValue }) {

    const {onEnter, onDelete, onSelectLetter} = useContext(AppContext) ////Está extrayendo los valores onDelete, onEnter y onSelectLetter del contexto AppContext

    //Cada una de las filas de teclas
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    //Callback function
    const handleKeyboard = useCallback(
        (event) =>{ 
        if(event.key === "Enter"){
            onEnter(); 
        }
        else if (event.key === "Backspace"){
            onDelete();
        }
        else{
            keys1.forEach((key) =>{
                if(event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key)
                }
            })
            keys2.forEach((key) =>{
                if(event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key)
                }
            })
            keys3.forEach((key) =>{
                if(event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key)
                }
            })
        }
    });

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard) //"Escucha" el teclado que el usuario tiene en su computadora. handleKeyboard se encarga que hacer con la tecla presionada

        return () =>{
            document.removeEventListener("keydown", handleKeyboard)
        }
    }, [handleKeyboard])


    /* GENERA EL TECLADO */

    return (
        /* <div className="button-letter"> {letterValue} </div>*/
        <article className='wd-keyboard-container' onKeyDown={handleKeyboard}>
            <div className="row" >
                {keys1.map((key) => { //Pasa por todas las letras, aplicando la funcion a cada una de ellas (generando el teclado)
                    return (<Key keyVal={key} />)
                })}
            </div>

            <div className="row">
                {keys2.map((key) => {
                    return  (<Key keyVal={key} />)
                })}
            </div>

            <div className="row">
                <Key keyVal="ENTER" bigKey />
                {keys3.map((key) => {
                    return(  <Key keyVal={key} />)
                })}
                <Key keyVal="DELETE" bigKey  />
            </div>
        </article>
    )

}