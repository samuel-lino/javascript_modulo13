import React from "react";
import './titulos.css'

function main(){
    return(
        <div className="head_main">
            <h1>Jogo da velha</h1>
            <div className="jogadores">
                <h3 className="j1">Jogador 1: O</h3>
                <h3 className="j2">Jogador 2: X</h3>
            </div>
            <h4 className="Pvez">Proxima jogada <h4 className="vez">X</h4></h4>
            
        </div>
    )
}

export default main