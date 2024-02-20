const mongoose = require('mongoose');

const connectToDatabase = async () => {

    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@projectmongodb.guq13tg.mongodb.net/?retryWrites=true&w=majority`);

        return console.log("Conectado com sucesso!");
    } catch (error) {
        console.log("Error ao se conectar com o banco de dados", error);
    }
}

module.exports = connectToDatabase;