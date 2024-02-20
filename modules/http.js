const http = require('http');
const port = 8080;

//             Cria um servidor HTTP
const server = http.createServer(((req, res) => {

    // req => representa o objeto de solicitação (request) do cliente
    // res => representa o objeto de resposta (response) que será enviado de volta ao cliente

    if (req.url === "/home") {
        // Define o código de status e os cabeçalhos da resposta
        // writeHead é usado para definir o status da resposta e os cabeçalhos HTTP
        res.writeHead(200, { "content-type": "text/html" });
        // 200 é o código de status HTTP que indica uma resposta bem-sucedida (OK)
        // 'Content-Type' define o tipo de conteúdo da resposta, neste caso, texto em HTML


        // Envia a resposta para o cliente
        // end é usado para enviar o corpo da resposta e finalizar a comunicação com o cliente
        res.end("<h1>Home page!</h1>");
        // tag h1 contendo => Home page! => é o conteúdo da resposta que será enviado ao cliente
    }

    if (req.url === "/users") {

        const users = [
            {
                name: 'John kenned',
                email: 'john@example.com',
                password: "senha123"
            },
            {
                name: 'Jane Smith',
                email: 'jane@example.com',
                password: "senha321"
            }
        ]

        res.writeHead(200, { 'Content-Type': "application/json" })
        res.end(JSON.stringify(users));
    }

}));

// Inicia o servidor e começa a escutar por requisições na porta especificada
// listen é usado para iniciar o servidor e fazê-lo ouvir por requisições na porta especificada
server.listen(port, () => {  // A função de retorno de chamada é chamada quando o servidor é iniciado com sucesso
    console.log(`listening at port: ${port}`)
});