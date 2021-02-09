const Articles = require('../models/articles');

const showByID = async (req, res) => {
    // console.log(req.params.id);
    const article = await Articles.showArticle(req.params.id);

    console.log(article);
    res.render('articles', { Article: article });
}

const showAllByID = async (req, res) => {

    if (!req.cookies.authToken) {
        res.send("Log in first!!!")
    }
    else {

        const articles = await Articles.showAllArticles(req.cookies.authToken);

        console.log(articles);
        // res.send(articles);
        res.render("allArticles", { articles: articles });
    }
}

// const create = async (req, res) => {
//     const article = new Articles({
//         title: "January marks",
//         owner: "6013e8baecae39c8a12cb1f2",
//         text: "Student`s marks for january month."});

//     article.save()
//     .then(() => {
//         res.send("Success");

//     }).catch((err) => {
//         res.send(`Error: ${err}`);
//     })
// }

module.exports = {
    showByID,
    showAllByID,
    // create
}