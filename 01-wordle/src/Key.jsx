import { AppContext } from "./App";
import React, { useContext } from "react";

export function Key({ keyVal, bigKey }) {

    const {
        onDelete,
        onEnter,
        onSelectLetter
    } = useContext(AppContext) //Está extrayendo los valores onDelete, onEnter y onSelectLetter del contexto AppContext

    const selectLetter = () => {

        if (keyVal === "ENTER") {
            onEnter();
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