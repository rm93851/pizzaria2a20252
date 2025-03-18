import {useState} from 'react'

function App(){

  const [nome, setNome] = useState('Ronaldo');

  const Formulario = () => {
    return (
      <>
        <h4>Formulário de Inscrição</h4>
        <input className="Nome"
            name = "nome"
            placeholder="Digite seu nome..."
            onChange={(e)=>setNome(e.target.value)}
            type="text" />
        <button onClick={()=>{alert(nome)}}>
          CLIQUE AQUI
        </button>
      </>
    )
  }

  return (
    <div>
      <h3>Pizzaria 2A</h3>
      <Formulario />
      <Formulario />
      <Formulario />
    </div>
  )
}

export default App
