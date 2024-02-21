// Importa o módulo mongoose para trabalhar com o MongoDB
const mongoose = require('mongoose');

// Define o esquema do usuário usando o mongoose.Schema
const userSchema = new mongoose.Schema({
    // Define o campo firstName como uma string obrigatória
    firstName: {
        type: String,
        required: true,
    },
    // Define o campo lastName como uma string obrigatória
    lastName: {
        type: String,
        required: true,
    },
    // Define o campo email como uma string obrigatória
    email: {
        type: String,
        required: true,
    },
    // Define o campo password como uma string obrigatória com comprimento mínimo e máximo
    password: {
        type: String,
        required: true,
        minLength: 7,
        maxLength: 14,
    }
});

// Cria o modelo User usando o esquema definido acima
const UserModel = mongoose.model('user', userSchema);

// Exporta o modelo User para uso em outros arquivos
module.exports = UserModel;
