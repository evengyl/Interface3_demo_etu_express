const express = require("express")
const app = express()
const port = process.env.PORT || 3000

/*
Users (je veux exposé au web, des utilisateurs)
    localhost:3000/api/users/       -->GET all users (récupérer tout les users)
    localhost:3000/api/users/:id    -->GET one user by id (récupérer un user)
    localhost:3000/api/users/       -->POST one user (ajouter un user)
    localhost:3000/api/users/:id    -->PUT one user (modifir un user)
    localhost:3000/api/users/:id    -->DELETE one user(supprimer un user)

    ------- CRUD Create Read Update Delete -------------------- 
    ------- CRUD Insert into, Select, Update, Delete ----------


*/


/*
Products
    Créer l'api suivante ! 

    localhost:3000/api/products/        --> get all
    localhost:3000/api/products/:id     --> get one by id
    localhost:3000/api/products/        --> post product
    localhost:3000/api/products/:id     --> put / patch product
    localhost:3000/api/products/:id     --> delete one product

    localhost:3000/api/prices/              --> get all
    localhost:3000/api/prices/:idProd       --> get one by id
    localhost:3000/api/prices/              --> post price
    localhost:3000/api/prices/:idProd       --> put / patch price on product
    localhost:3000/api/prices/:idProd       --> delete one price on product

    localhost:3000/api/categories/          --> get all
    localhost:3000/api/categories/:idProd   --> get one by id
    localhost:3000/api/categories/          --> post categories
    localhost:3000/api/categories/:idProd   --> put / patch categories on product
    localhost:3000/api/categories/:idProd   --> delete one categories on product


*/




// localhost:3000/api/users/       -->GET all users (récupérer tout les users)
app.get("/api/users", (req, res) => {
    res.json({
        message : "Liste de tous les users"
    })
})


// localhost:3000/api/users/:id    -->GET one user by id (récupérer un user)
// localhost:3000/api/users/42 || localhost:3000/api/users/tutu
app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id)
    res.json({
        message : "Un seul user"
    })
})


// localhost:3000/api/users/       -->POST one user (ajouter un user)
app.post("/api/users", (req, res) => {
    res.json({
        message : "Création d'un user"
    })
})


// localhost:3000/api/users/:id    -->PUT one user (modifir un user)
app.put("/api/users/:id", (req, res) => {
    res.json({
        message : "Modification d'un user"
    })
})


// localhost:3000/api/users/:id    -->DELETE one user(supprimer un user)
app.delete("/api/users/:id", (req, res) => {
    res.json({
        message : "Suppression d'un user"
    })
})




app.listen(port, console.log(`Le serveur écoute sur le port ${port}`))