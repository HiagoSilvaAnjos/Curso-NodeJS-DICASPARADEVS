const fs = require('fs');
const path = require('path');

// criar pasta => mkdir
fs.mkdir(path.join(__dirname, '/page'), (error) => {
    if (error) {
        return console.log("Error: ", error);
    }

    console.log("Pasta criada com sucesso!")
})

// criar um arquivo => writeFile
fs.writeFile(path.join(__dirname, '/page', 'index.txt'),
    'html:5',
    (error) => {
        if (error) {
            return console.log("Error: ", error);
        }

        console.log("Arquivo criado com sucesso!")

        // appendFile => Adicionar a um arquivo
        fs.appendFile(path.join(__dirname, '/page', 'index.txt'),
            ' => Hyper Text Markup Language',
            (error) => {
                if (error) {
                    return console.log("Error: ", error);
                }

                console.log("Arquivo modificado com sucesso!")
            })

        // readFile => ler um arquivo
        fs.readFile(path.join(__dirname, '/page', 'index.txt'),
            'utf8',
            (error, data) => {

                if (error) {
                    return console.log("Error: ", error);
                }

                console.log(data);

            })
    })
