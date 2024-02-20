const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.status(200).send("<h1>Home page!</h1>");
});

app.get('/users', (req, res) => {

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

    res.status(200).json(users)
})

const port = 8080;
app.listen(port, () => console.log(`listenig on port ${port}`));