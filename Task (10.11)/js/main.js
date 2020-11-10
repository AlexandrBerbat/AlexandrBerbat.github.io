const express = require("express");

const PORT = 3000;
const app = express();

const MyRouter = express.Router();


MyRouter.use("/add", (req, res) => {
    res.send("Добавить объект");
});

MyRouter.use("/:id", (req, res) => {
    res.send(`Объект ${req.params.id}`);
});

MyRouter.use("/", (req, res) => {
    res.send("Список объектов");
});

app.use("/objects", MyRouter);

app.use("/info", (req, res) => {
    res.send("Информация о разработчике");
});

app.use("/", (req,res) => {
    res.send("Домашняя страница");
});


app.listen(PORT);