import {useState} from 'react'

function App(){

  const [nome, setNome] = useState('Ronaldo');

  const Formulario = (props) => {
    return (
      <>
        <h4>Formulário de Inscrição</h4>
        <input className="Nome"
            name = "nome"
            placeholder="Digite seu nome..."
            onChange={(e)=>props.nome = e.target.value}
            type="text" />
        <button onClick={()=>{
          (props.texto != null) ? alert(props.texto) : alert(props.nome)
          }}>
          CLIQUE AQUI
        </button>
      </>
    )
  }

  return (
    <div>
      <h3>Pizzaria 2A</h3>
      <Formulario texto="Texto enviado pelo App" />
      <Formulario texto="Santos meu amor" />
      <Formulario texto="Novo texto enviado pelo App" />
      <Formulario nome={nome} />
    </div>
  )
}

export default App
