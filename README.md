# Frontend para API de Cadastro

Este repositório contém a interface frontend para uma API de cadastro, desenvolvida em React. O projeto inclui conexão com o backend, autenticação via JWT, envio e recebimento de dados da API, uso de rotas públicas e privadas, e estilização com Tailwind CSS.

## Tecnologias Utilizadas

- **React** - Biblioteca para construção da interface do usuário
- **React Router** - Gerenciamento de rotas
- **Axios** - Requisições HTTP para a API
- **Tailwind CSS** - Estilização do frontend
- **JWT (JSON Web Token)** - Autenticação e gerenciamento de sessão

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Duartois/sistema-de-cadastro.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd sistema-de-cadastro
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
O projeto estará disponível em `http://localhost` (ou a porta configurada no seu ambiente).

## Funcionalidades

### 1. Conexão com o Backend

O frontend realiza chamadas à API utilizando **Axios**, facilitando o envio e recebimento de dados. Exemplo de requisição:

```js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
```

### 2. Autenticação com JWT

A autenticação é feita armazenando o token JWT no **localStorage** e utilizando um contexto para gerenciar o estado global do usuário.

Exemplo de login:

```js
const login = async (email, senha) => {
  try {
    const response = await api.post('/login', { email, senha });
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    console.error('Erro no login', error);
  }
};
```

### 3. Rotas Públicas e Privadas

As rotas privadas só são acessíveis se o usuário estiver autenticado. Exemplo de proteção de rota:

```js
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};
```

### 4. Estilização com Tailwind CSS

O projeto usa Tailwind CSS para estilização rápida e responsiva. Exemplo:

```jsx
<button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
  Entrar
</button>
```

## Contribuição

1. Fork este repositório
2. Crie um branch para sua feature (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'Adicionando nova feature'`)
4. Envie para o repositório (`git push origin minha-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
