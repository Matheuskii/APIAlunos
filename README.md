# APIAlunos

API simples em Node.js/Express para cadastro, consulta, atualização e remoção de alunos.

## Como rodar

1. Instale as dependências (se necessário):
```bash
npm init -y
npm install express cors
```

2. Inicie o servidor:
```bash
node server.js
```

3. O servidor estará disponível em:  
[http://localhost:3000](http://localhost:3000)

---

## Endpoints

### Listar todos os alunos
```
GET /alunos
```

**Resposta de exemplo (200 OK):**
```json
[
  {
    "id": 1,
    "nome": "João Souza",
    "cpf": "98765432100",
    "cep": "87654321",
    "uf": "RJ",
    "rua": "Rua das Flores",
    "numero": 456,
    "complemento": "Casa"
  }
]
```

---

### Buscar aluno por ID
```
GET /alunos/:id
```

**Resposta de exemplo (200 OK):**
```json
{
  "id": 1,
  "nome": "João Souza",
  "cpf": "98765432100",
  "cep": "87654321",
  "uf": "RJ",
  "rua": "Rua das Flores",
  "numero": 456,
  "complemento": "Casa"
}
```

**Erro (404 Not Found):**
```json
{ "erro": "Aluno não encontrado" }
```

---

### Criar novo aluno
```
POST /alunos/criar
```

**Exemplo de requisição:**
```bash
curl -X POST http://localhost:3000/alunos/criar   -H "Content-Type: application/json"   -d '{
    "nome":"João Souza",
    "cpf":"98765432100",
    "cep":"87654321",
    "uf":"RJ",
    "rua":"Rua das Flores",
    "numero":456
  }'
```

**Resposta de exemplo (201 Created):**
```json
{ "mensagem": "Aluno cadastrado com sucesso", "id": 1 }
```

**Erro (400 Bad Request):**
```json
{ "erro": "CPF inválido ou já cadastrado" }
```

---

### Atualizar aluno existente
```
PUT /alunos/:id
```

**Exemplo de requisição:**
```bash
curl -X PUT http://localhost:3000/alunos/1   -H "Content-Type: application/json"   -d '{
    "nome":"João Souza Silva",
    "uf":"SP"
  }'
```

**Resposta de exemplo (200 OK):**
```json
{ "mensagem": "Aluno atualizado com sucesso", "id": 1 }
```

**Erro (404 Not Found):**
```json
{ "erro": "Aluno não encontrado" }
```

---

### Remover aluno
```
DELETE /alunos/:id
```

**Exemplo de requisição:**
```bash
curl -X DELETE http://localhost:3000/alunos/1
```

**Resposta de exemplo (200 OK):**
```json
{ "mensagem": "Aluno removido com sucesso" }
```

**Erro (404 Not Found):**
```json
{ "erro": "Aluno não encontrado" }
```

---

### Observações
- Todos os campos (exceto **complemento**) são obrigatórios.  
- **CPF** deve ter 11 dígitos, **CEP** 8 dígitos, **UF** 2 letras.  
- Não é permitido cadastrar ou atualizar com **CPF duplicado**.
