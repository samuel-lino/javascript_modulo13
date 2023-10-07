import React from "react";
import './casas.css'
function casas(props){
    return(<div>
            <button id={props.id} onClick={function clique(){
                let eu = document.querySelector('#' +props.id)
                let vez = document.querySelector('.vez')
                if(eu.getAttribute('class') !== 'ok'){
                    if(vez.innerText === 'X'){
                    eu.innerText = 'X'
                    vez.innerText = 'O'
                }
                else{
                    eu.innerText = 'O'
                    vez.innerText = 'X'
                }
                eu.style.color = '#000000'
                eu.setAttribute('class', 'ok')
                }
            }}>X</button>
        </div>)
}
export default casas