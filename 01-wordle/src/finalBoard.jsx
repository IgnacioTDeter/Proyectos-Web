import { AppContext } from "./App";

export function FinalBoard({ gameValue, finalWord }) {
    console.log(gameValue)
    if (gameValue === 1) {
        return (
            <section className="board-container">
                <article className="popUp-container">
                    <div className="popUp-title">
                        ¡Ganaste! :D
                    </div>
                    <p> Adivinaste la palabra oculta: <br /> 
                    
                    {finalWord} 
                    </p>
                    <button onClick={() => window.location.reload()}>
                        Jugar de nuevo
                    </button>
                </article>
            </section>
        )
    }
    else {
        return (
            <section className="board-container">
                <article className="popUp-container">
                    <div className="popUp-title">
                        ¡Perdiste! :(
                    </div>
                    <p> La palabra oculta era: <br /> 
                    
                    {finalWord} 
                    </p>
                    <button onClick={() => window.location.reload()}>
                        Jugar de nuevo
                    </button>
                </article>
            </section>
        )
    }


}