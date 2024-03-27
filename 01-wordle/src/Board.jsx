import React, { useState } from "react";
import { BoardDefault } from "./Words.jsx";
import { Letter } from "./Letter.jsx";


export function Board() {
    const [board, setBoard] = useState(BoardDefault);

        return (
            <div>
            <section className='wd-container-GTL'>
                <Letter letterPos={0} attemptVal={0} />
                <Letter letterPos={1} attemptVal={0} />
                <Letter letterPos={2} attemptVal={0} />
                <Letter letterPos={3} attemptVal={0} />
                <Letter letterPos={4} attemptVal={0} />
            </section>
            <section className='wd-container-GTL'>
                <Letter letterPos={0} attemptVal={0} />
                <Letter letterPos={1} attemptVal={0} />
                <Letter letterPos={2} attemptVal={0} />
                <Letter letterPos={3} attemptVal={0} />
                <Letter letterPos={4} attemptVal={0} />
            </section>
            <section className='wd-container-GTL'>
                <Letter letterPos={0} attemptVal={0} />
                <Letter letterPos={1} attemptVal={0} />
                <Letter letterPos={2} attemptVal={0} />
                <Letter letterPos={3} attemptVal={0} />
                <Letter letterPos={4} attemptVal={0} />
            </section>
            <section className='wd-container-GTL'>
                <Letter letterPos={0} attemptVal={0} />
                <Letter letterPos={1} attemptVal={0} />
                <Letter letterPos={2} attemptVal={0} />
                <Letter letterPos={3} attemptVal={0} />
                <Letter letterPos={4} attemptVal={0} />
            </section>
            <section className='wd-container-GTL'>
                <Letter letterPos={0} attemptVal={0} />
                <Letter letterPos={1} attemptVal={0} />
                <Letter letterPos={2} attemptVal={0} />
                <Letter letterPos={3} attemptVal={0} />
                <Letter letterPos={4} attemptVal={0} />
            </section>
        </div>
        
        
        );
}