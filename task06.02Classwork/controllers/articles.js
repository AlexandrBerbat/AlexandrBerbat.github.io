const Articles = require('../models/articles');

const showByID = async (req, res) => {
    // console.log(req.params.id);
    const article = await Articles.showArticle(req.params.id);

    console.log(article);
    res.render('articles', {Article: article});
}

const showAllByID = async (req, res) => {
    // console.log(req.params.id);
    const articles = await Articles.showAllArticles(req.params.id);

    console.log(articles);
    res.send(200);
}

const create = async (req, res) => {
    // const article = new Articles({
    //     title: "January marks",
    //     owner: "6013e8baecae39c8a12cb1f2",
    //     text: "Student`s marks for january month."});
    
    // article.save()
    // .then(() => {
    //     res.send("Success");

    // }).catch((err) => {
    //     res.send(`Error: ${err}`);
    // })
}

module.exports = {
    showByID,
    showAllByID,
    create
}