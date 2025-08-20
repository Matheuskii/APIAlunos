# APIAlunos

API simples em Node.js/Express para cadastro, consulta, atualização e remoção de alunos.

## Como rodar

1. Instale as dependências (se necessário):
npm -y
npm install express cors


2. Inicie o servidor: node server


3. O servidor estará disponível em:  
[http://localhost:3000](http://localhost:3000)

## Endpoints

### Listar todos os alunos
- **GET** `/alunos`
- **Resposta:** JSON com todos os alunos cadastrados.

### Buscar aluno por ID
- **GET** `/alunos/:id`
- **Resposta:** JSON do aluno ou erro 404.

---

### Criar novo aluno
- **POST** `/alunos/criar`
- **Body (JSON):**

```json
{
  "nome": "João Souza",
  "cpf": "98765432100",
  "cep": "87654321",
  "uf": "RJ",
  "rua": "Rua das Flores",
  "numero": 456,
  "complemento": "Casa"
}


  ### Observações
Todos os campos (exceto complemento) são obrigatórios.
CPF deve ter 11 dígitos, CEP 8 dígitos, UF 2 letras.
Não é permitido cadastrar ou atualizar com CPF duplicado.