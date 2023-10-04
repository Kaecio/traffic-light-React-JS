import { Sinalizacao } from './Sinalizacao'
import './App.css'

function App() {
  return (
    <div className='App'>
     <Sinalizacao color={[{
        id: '1',
        color: 'red',
        nome: 'Vermelho'
      }, {
        id: '2',
        color: 'yellow',
        nome: 'Amarelo'
      }, {
        id: '3',
        color: 'green',
        nome: 'Verde'
     }]} />
     
    </div>
  )
}

export default App;