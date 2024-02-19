// Importar o path
const path = require('path');

// Basename => Apenas o nome do arquivo
console.log(path.basename(__filename));

// Dirname => Nome do repositório atual
console.log(path.dirname(__filename));

// extname => Extenção do arquivo
console.log(path.extname(__filename));

// parse => Criar um objeto Path
console.log(path.parse(__filename));

// join => juntar vários caminhos de arquivos
console.log(path.join(__dirname, '/test', 'teste.html'))