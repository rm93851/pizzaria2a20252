// hooks do react - estado dos dados / renderizacao
import { useState, useEffect } from "react";
// ferramenta de consumo de rotas ou endpoints
import axios from "axios";

// Formulário simples em JavaScript usando apenas <div>, <input>, useState/useEffect e axios
const CadastroProduto = () => {
  //estado com dados do formulario
  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    precoVenda: "",
    descricao: ""
  });
  // estado observa a execucao do botao
  const [loading, setLoading] = useState(false);
  // estado armazena a mensagem de sucesso ou insucesso do cadastro
  const [msg, setMsg] = useState("");
//cntrola a renderizacao da pagina observando o formulario
//troca a virgula do preco por ponto decimal
  useEffect(() => {
    if (form.precoVenda.includes(",")) {
      setForm((f) => ({ ...f, precoVenda: f.precoVenda.replace(",", ".") }));
    }
  }, [form.precoVenda]);
  //metodo ou componente de definicao de dados do formulario
  //captura dados do formiulario e monta o JSON
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // metodo acionado ápos cadastro dos dados
  const submit = async () => {
    setMsg("");
    const payload = {
      nome: form.nome,
      tipo: form.tipo,
      precoVenda: Number(form.precoVenda),
      descricao: form.descricao     
    };
    //critica ou verificacao do formulario
    if (!payload.nome || !payload.descricao || !payload.tipo || !payload.precoVenda) {
      setMsg("Preencha todos os campos corretamente.");
      return;
    }
//ativa carrregamento da pagina
    setLoading(true);
    try {
      // POST- INSERT - cadastra os dados no servidor (banco de dados)
      axios.post("http://172.19.0.49/pizzariateste/api/v1/produto", 
        payload,
        {
          mode: "no-cors",
          headers: {
            "Accept":"*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        console.log(response.data.status);
      })
      .catch(error => {
        console.log(error);
      });
      setMsg("Produto cadastrado com sucesso.");
      setForm({ nome: "", tipo: "", precoVenda: "", descricao: ""});
    } catch (err) {
      const texto = err?.response?.data?.message || err?.message || "Falha ao cadastrar.";
      setMsg(texto);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>Cadastro de Produto</div>

      {msg ? <div>{msg}</div> : null}

      <div>
        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          name="tipo"
          placeholder="Tipo (ex.: FISICO/SERVICO/DIGITAL)"
          value={form.tipo}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          name="precoVenda"
          placeholder="Preço (ex.: 199.90)"
          value={form.precoVenda}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          name="categoriaId"
          placeholder="Categoria ID (ex.: 12)"
          value={form.categoriaId}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          type="button"
          value={loading ? "Enviando..." : "Cadastrar"}
          onClick={submit}
          disabled={loading}
        />
      </div>
    </div>
  );
}

export default CadastroProduto;