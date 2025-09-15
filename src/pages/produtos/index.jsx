import {useState, useEffect} from 'react'
import axios from 'axios'


const Produtos = () => {

    const [dados, setDados] = useState([]);

    const pegarPizzas = async () => {

        await axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto", 
            {withCredentials: true}
        )
        .then((response) => setDados(JSON.stringify(response.data)))
        .catch((error) => console.log(error))
    }

    useEffect(()=>{
        pegarPizzas();
    }, [])

    useEffect(()=>{
        console.log(dados)
    }, [dados])

    // Objeto de produtos da lista
    const pizzas = [
        'Pizza de Muçarela',
        'Pizza de Calabreza',
        'Pizza Baiana',
        'Pizza Portuguesa',
        'Pizza de Frango'
    ]
    // Iteração da lista de pizzas
    const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>);

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
