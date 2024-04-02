import { useContext } from "react";
import { AppContext } from "./App";

export const BoardDefault = [  //Matriz donde estan todas las letras del tablero
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

var attempt = 0; //Arreglar esto con el objeto currAttempt (Error en las reglas de hooks)

export function GuessWord() {
    

    const subMatriz = BoardDefault[attempt].slice(0, 5);
    const palabra = subMatriz.join("");
   

    const finalWord = "PERRO";

    if (palabra === finalWord) {
        alert("U win!");
    }
    else{
        alert("u lose :(")
    }

    attempt++;

    return null; 
}