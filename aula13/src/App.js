import './App.css';
import Btn from './componentes/botoes/botao'
import Form from './componentes/formulario/formulario'

function App() {
  return (
    <div>
      <Btn nome= "let's go" class= "prime"/>
      <Form/>
      <p className='texto'></p>
    </div>
  );
}

export default App;
