const express = require('express');
const app = express();
const UserModel = require('../src/models/user.model');
app.use(express.json());

app.post('/users', async (req, res) => {

    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }

})


const port = 3000;
app.listen(port, () => console.log(`listenig on port ${port}`));