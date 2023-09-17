import React from "react";
import './input.css'


function input(props){
    return <input className={props.class} placeholder={props.place} type={props.tipo}></input>
}

export default input