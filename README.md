# Sistema de Gerenciamento de Usuários

Um sistema completo de gerenciamento de usuários com backend em Node.js seguindo a arquitetura Onion e frontend em React com TypeScript.

## 🏗️ Arquitetura

### Backend - Arquitetura Onion
O backend segue os princípios da arquitetura Onion (Clean Architecture), organizado em camadas bem definidas:

```
backend/src/
├── domain/           # Camada de domínio (núcleo)
│   ├── entities/     # Entidades de negócio
│   └── repositories/ # Interfaces dos repositórios
├── application/      # Camada de aplicação
│   └── usecases/     # Casos de uso da aplicação
├── infrastructure/   # Camada de infraestrutura
│   ├── database/     # Implementações de banco de dados
│   └── auth/         # Autenticação e autorização
└── presentation/     # Camada de apresentação
    └── routes/       # Rotas da API
```

### Frontend - React + TypeScript
O frontend utiliza React 19 com TypeScript, Vite como bundler e Tailwind CSS para estilização:

```
frontend/src/
├── pages/           # Componentes de página
├── services/        # Serviços de API
└── components/      # Componentes reutilizáveis
```

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **SQLite** - Banco de dados (via better-sqlite3)
- **JWT** - Autenticação baseada em tokens
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Gerenciamento de variáveis de ambiente

### Frontend
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Framework CSS utilitário

## 📋 Funcionalidades

- ✅ Autenticação com JWT
- ✅ CRUD completo de usuários
- ✅ Interface responsiva
- ✅ Proteção de rotas
- ✅ Validação de dados
- ✅ Persistência em SQLite

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Backend

1. Navegue para o diretório do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (opcional):
```bash
cp .env.example .env
```

4. Execute o servidor:
```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

O backend estará disponível em `http://localhost:3000`

### Frontend

1. Navegue para o diretório do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

O frontend estará disponível em `http://localhost:3001`

## 📚 Estrutura da API

### Autenticação
- `POST /auth/login` - Login de usuário

### Usuários
- `GET /api/users` - Listar todos os usuários
- `GET /api/users/:id` - Obter usuário específico
- `POST /api/users` - Criar novo usuário
- `PUT /api/users/:id` - Atualizar usuário
- `DELETE /api/users/:id` - Deletar usuário

### Autenticação
Todas as rotas de usuários requerem um token JWT válido no header:
```
Authorization: Bearer <token>
```

## 🔐 Segurança

- Autenticação baseada em JWT
- Middleware de autenticação para rotas protegidas
- CORS configurado para o frontend
- Validação de dados de entrada

## 🎨 Interface do Usuário

O frontend oferece uma interface moderna e responsiva com:

- **Página de Login** - Autenticação de usuários
- **Lista de Usuários** - Visualização e gerenciamento
- **Formulário de Usuário** - Criação e edição
- **Navegação protegida** - Rotas baseadas em autenticação

## 🧪 Desenvolvimento

### Scripts Disponíveis

**Backend:**
- `npm run dev` - Executa com nodemon para desenvolvimento
- `npm start` - Executa em modo produção

**Frontend:**
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Linting do código

### Estrutura de Desenvolvimento

O projeto está configurado para desenvolvimento simultâneo:
- Backend: `http://localhost:3000`
- Frontend: `http://localhost:3001`

## 📝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- Desenvolvido como projeto de trabalho

---

**Nota:** Este projeto demonstra a implementação de uma arquitetura limpa (Onion) no backend e uma interface moderna com React no frontend, servindo como base para aplicações mais complexas.
