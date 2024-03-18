
export function GuessTheLetter(){
    return(
      <input className="wd-input-cell"  type="text" maxlength="1"/>
    )
}


export function ContainerGTL({MarginTop}){
    return(
        <section className='wd-container-GTL'>
            < GuessTheLetter/>
            < GuessTheLetter/>
            < GuessTheLetter/>
            < GuessTheLetter/>
            < GuessTheLetter/>
       </section>
    )
}