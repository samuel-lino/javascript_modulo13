import React from "react";
import Btn from '../botoes/botao'
import Input from '../inputs/input'
import './formulario.css'

function enviar(){
    let texto = document.querySelector('.texto')
    let formu = 'cadastro no nome de '+ document.querySelector('.nome').value+ ' cujo cpf é '+ document.querySelector('.cpf').value+ ' nascido em '+ document.querySelector('.data').value

    texto.innerHTML = formu
    let list = document.querySelectorAll('.form input')
    console.log(list[0])
    for(let i = 0; i < list.length; i++){
      list[i].value = ''
    }
    
}

function formulario(){
    return <div className="form">
      <Input place = "Nome" class='nome'/>
      <Input place='CPF' class='cpf'/> 
      <Input place='Data de nascimento' class='data' tipo='date'/> 
      <Input place='E-mail' class='email'/> 
      <Input place='Telefone' class='telefone'/> 
      <Btn nome = "confirmar" click={enviar}/>  
    </div>
}

export default formulario