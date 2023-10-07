import React from "react";
import Casa from "../casas/casas";
import './tabuleiro.css'

function tab(){
    return(
        <div className="tabuleiro">
            <div className="linha">
                <Casa id = 'a'/>
                <Casa id = 'b'/>
                <Casa id = 'c'/>
            </div>
            <div className="linha">
                <Casa id = 'd'/>
                <Casa id = 'e'/>
                <Casa id = 'f'/>
            </div>
            <div className="linha">
                <Casa id = 'g'/>
                <Casa id = 'h'/>
                <Casa id = 'i'/>
            </div>
            
        </div>
    )
}

export default tab