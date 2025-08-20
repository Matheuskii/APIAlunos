// importando express
const express = require("express");
// cria aplicação
const app = express();
app.use(express.json());
const porta = 3000;

const alunos = [
  {
    id: 1,
    nome: "Maria Silva",
    cpf: "12345678901",
    cep: "01234567",
    uf: "SP",
    rua: "Av. Central",
    numero: 123,
    complemento: "Apto 12",
  },
  {
    id: 2,
    nome: "Maria Silva",
    cpf: "12345678903",
    cep: "01234567",
    uf: "SP",
    rua: "Av. Central",
    numero: 123,
    complemento: "Apto 12",
  },
];

app.get("/alunos", (req, res) => {
  res.json(alunos);
});
app.get("/alunos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const nomes = alunos.find((aluno) => aluno.id === id);
    if (nomes == null) {
    }
    res.json(nomes);
  } catch (error) {
    res.status(666).json({
      error: "Deu ruim a situação diferenciada",
    });
  }
});

app.post("/alunos/criar", (req, res) => {
  const { nome, cpf, cep, uf, rua, numero, complemento } = req.body;

  if (!nome || nome == null || !cpf || !cep || !uf || !rua || !numero) {
    return res.status(400).json({
      erro: "Algum dos campos obrigátorioa não foram inseridos",
    });
  }

  const id = alunos.length > 0 ? alunos[alunos.length - 1].id + 1 : 1;

  alunos.forEach((aluno) => {
    console.log(aluno.cpf);
  });

  const existeCPF = alunos.filter((aluno) => aluno.cpf === cpf);

  const novoAluno = { id, nome, cpf, cep, uf, rua, numero, complemento };

  if (existeCPF.length > 0) {
    return res.status(400).json({
      erro: "o cpf ja existe krl kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk troxa da pora viado macaco",
    });
  } else {
    console.log(novoAluno);

    alunos.push(novoAluno);

    res.status(201).json({
      mensagem: "Aluno Cadastrado com sucesso",
      aluno: novoAluno,
    });
  }
});

app.delete("/alunos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const indice = alunos.findIndex((a) => a.id === id);

  if (indice === -1) {
    return res.status(404).json({
      mensagem: "Aluno não encontrado",
    });
  }
  console.log(indice);

  alunos.splice(indice, 1);

  res.status(204).json({
    mensagem: "Aluno deletado com sucesso!",
  });
});

app.listen(porta, () =>
  console.log(`Servidor rodando http://localhost:${porta}/`)
);
