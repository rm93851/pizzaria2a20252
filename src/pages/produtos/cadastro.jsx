import './produtos.css'

const CadastroProduto = () => {

    return(
        <div className="CadastroProduto">

            <h3>Cadastro de Produtos</h3>
            <input type="text" id="id" placeholder="0" disabled />
            <input type="text" id="nome" placeholder="nome do produto" />
            <input type="text" id="descricao" placeholder="descrição" />
            <input type="text" id="tipo" placeholder="tipo do produto" />
            <input type="text" id="preco" placeholder="valor do produto" />
            <input type="text" id="categoriaId" placeholder="1" disabled />

            <input type="button" value="Cadastrar" 
            onClick={()=>{alert('Cadastrar Produto')}} />

        </div>
    )
}

export default CadastroProduto