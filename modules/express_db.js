const express = require('express');
const app = express();
const UserModel = require('../src/models/user.model');
app.use(express.json());

app.post('/users', async (req, res) => {

    try {
        const user = await UserModel.create(req.body);
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }

})

app.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find({})
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
})

app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);

        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
})

app.patch("/users/:id", async (req, res) => {

    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).send(error.message);
    }

})

app.delete("/users/:id", async (req, res) => {

    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }

})

const port = 3000;
app.listen(port, () => console.log(`listenig on port ${port}`));