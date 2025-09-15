import {useState, useEffect} from 'react'
import axios from 'axios'


const Produtos = () => {

    const [dados, setDados] = useState([]);

    const pegarPizzas = async () => {
        await axios.get("/backend/produto")
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
    }

    useEffect(()=>{
        pegarPizzas();
        setDados(dados)
    }, [])

    useEffect(()=>{
        console.log(dados.data)
    }, [dados])

    // Iteração da lista de pizzas
    const ListaPizzas = () => { 
        return Array.isArray(dados.data) ? dados.map(pizza => (
        <li key={pizza.id}>
            {pizza.nome}
        </li>)) : null;};

    return (
        <div>
            <h3>Listagem de Produtos</h3>

            <ul>
                <ListaPizzas />
            </ul>
        </div>
    )
}

export default Produtos
