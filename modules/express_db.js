// Importa o módulo Express.js
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Importa o modelo de usuário definido em algum lugar do seu projeto
const UserModel = require('../src/models/user.model');

// Configura o middleware do Express para processar JSON
app.use(express.json());

// Define o EJS como a view engine
app.set("view engine", 'ejs');

// Define o diretório onde os arquivos de visualização estão localizados
app.set("views", "src/views");

// Middleware de Logging: Registra informações sobre cada requisição recebida
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`); // Método HTTP da requisição
    console.log(`Content Type: ${req.headers["content-type"]}`); // Tipo de conteúdo da requisição
    console.log(`Date ${new Date()}`); // Data/hora da requisição

    next(); // Chama o próximo middleware na cadeia
});

// Rota para renderizar uma página de usuários
app.get("/views/users", async (req, res) => {
    const users = await UserModel.find({}); // Busca todos os usuários no banco de dados
    res.render('index', { users }); // Renderiza a página 'index.ejs' com a lista de usuários
});

// Rota para criar um novo usuário
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body); // Cria um novo usuário com base nos dados recebidos na requisição
        return res.status(201).json(user); // Retorna o usuário criado com status 201 (Created)
    } catch (error) {
        return res.status(500).send(error.message); // Retorna uma mensagem de erro com status 500 (Internal Server Error)
    }
});

// Rota para obter todos os usuários
app.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find({}); // Busca todos os usuários no banco de dados
        return res.status(200).json(users); // Retorna a lista de usuários com status 200 (OK)
    } catch (error) {
        return res.status(500).send(error.message); // Retorna uma mensagem de erro com status 500 (Internal Server Error)
    }
});

// Rota para obter um usuário por ID
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id; // Obtém o ID do usuário a partir dos parâmetros da URL
        const user = await UserModel.findById(id); // Busca o usuário pelo ID no banco de dados
        return res.status(200).json(user); // Retorna o usuário encontrado com status 200 (OK)
    } catch (error) {
        return res.status(500).send(error.message); // Retorna uma mensagem de erro com status 500 (Internal Server Error)
    }
});

// Rota para atualizar um usuário por ID
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id; // Obtém o ID do usuário a partir dos parâmetros da URL
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true }); // Atualiza o usuário com os novos dados
        return res.status(200).json(user); // Retorna o usuário atualizado com status 200 (OK)
    } catch (error) {
        return res.status(500).send(error.message); // Retorna uma mensagem de erro com status 500 (Internal Server Error)
    }
});

// Rota para excluir um usuário por ID
app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id; // Obtém o ID do usuário a partir dos parâmetros da URL
        const user = await UserModel.findByIdAndDelete(id); // Exclui o usuário pelo ID
        return res.status(200).json(user); // Retorna o usuário excluído com status 200 (OK)
    } catch (error) {
        return res.status(500).send(error.message); // Retorna uma mensagem de erro com status 500 (Internal Server Error)
    }
});

// Define a porta em que o servidor irá escutar
const port = 3000;

// Inicia o servidor Express na porta especificada
app.listen(port, () => console.log(`listenig on port ${port}`));
