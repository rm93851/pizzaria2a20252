import {useState, useEffect} from 'react'
import axios from 'axios'
 
const Produtos = () => {
 
    const [dados, setDados] = useState([]);
 
    useEffect(()=>{  
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