import React from "react";





function button(props){
    return(
    <button className={props.id} onClick={function click(){
        document.querySelector('.' + props.id).style.background = 'red'
    }}>teste</button>)
}


export default button