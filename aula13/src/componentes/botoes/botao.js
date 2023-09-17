import React from "react";
import "./botao.css"
function button(props){
    return <button className={props.class} onClick={props.click}>{props.nome}</button>
}

export default button