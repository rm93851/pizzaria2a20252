import { useState, useEffect } from "react";
import axios from "axios";

// Formulário simples em JavaScript usando apenas <div>, <input>, useState/useEffect e axios
const CadastroProduto = () => {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    tipo: "",
    preco: "",
    categoriaId: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (form.preco.includes(",")) {
      setForm((f) => ({ ...f, preco: f.preco.replace(",", ".") }));
    }
  }, [form.preco]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async () => {
    setMsg("");
    const payload = {
      nome: form.nome,
      descricao: form.descricao,
      tipo: form.tipo,
      preco: Number(form.preco),
      categoriaId: parseInt(form.categoriaId, 10),
    };

    if (!payload.nome || !payload.descricao || !payload.tipo || !payload.preco || !payload.categoriaId) {
      setMsg("Preencha todos os campos corretamente.");
      return;
    }

    setLoading(true);
    try {
      axios.post("http://172.19.0.49/pizzariateste/api/v1/produto", payload)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      setMsg("Produto cadastrado com sucesso.");
      setForm({ nome: "", descricao: "", tipo: "", preco: "", categoriaId: "" });
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
          name="preco"
          placeholder="Preço (ex.: 199.90)"
          value={form.preco}
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