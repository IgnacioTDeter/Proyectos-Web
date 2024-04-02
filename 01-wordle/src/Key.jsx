import { AppContext } from "./App";
import { GuessWord } from "./Words";
import React, { useContext } from "react";

export default function Key({ keyVal, bigKey }) {

    const {
        onDelete,
        onEnter,
        onSelectLetter
    } = useContext(AppContext) //Está extrayendo los valores onDelete, onEnter y onSelectLetter del contexto AppContext


    //Funcion que funciona cuando apretamos el teclado de la web
    const selectLetter = () => {

        if (keyVal === "ENTER") {
            onEnter();
            GuessWord();
        }
        else if (keyVal === "DELETE") {
            onDelete();
        }
        else {
            onSelectLetter(keyVal)
        }

    }
    return (
        <div className="button-letter" id={bigKey && "big"} onClick={selectLetter}> {keyVal} </div>
    )
}