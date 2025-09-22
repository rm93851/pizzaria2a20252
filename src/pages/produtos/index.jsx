// Hooks do react - para controlar renderizacao e estados
import {useState, useEffect} from 'react'
//Ferramenta para consumir as rotas do backend
import axios from 'axios'
 
const Produtos = () => {
  //Um estado para controlar os dados
    const [dados, setDados] = useState(['Mucarela','Calabresa']);

 // Controla a renderizacao da pagina
    useEffect(()=>{  
        // GET= busca os dados da rota(endpoint)
        // devolve dados(data) e codigo da resposta(status)
        // then e uma promise(promessa) requisicao assincrona
        // catch captura o erro da requisicao
        
        axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
        .then((response) => {
            console.log(response.data.data)
            setDados(response.data.data)
        })
        .catch((error) => console.log(error))
    }, [])
 
    // Iteração da lista de pizzas
    const listaPizzas = dados.map(pizza =>
        <li key={pizza.id}>{pizza.nome}</li>)
 
    return (
        <div>
            <h3>Listagem de Produtos</h3>
 
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}
 
export default Produtos