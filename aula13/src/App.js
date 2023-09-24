import './App.css';
import Btn from './componentes/botoes/botao'
import Form from './componentes/formulario/formulario'
import Teste from './componentes/teste/teste'

function App() {
  return (
    <div>
      <Btn nome= "let's go" class= "prime"/>
      <Form/>
      <p className='texto'></p>
      <Teste id='ka'/>
    </div>
  );
}

export default App;
