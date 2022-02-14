const db = require("../models/dbConnect").get()

/*
    localhost:3000/api/products/            --> get all
    localhost:3000/api/products/:id         --> get one by id
    localhost:3000/api/products/            --> post product
    localhost:3000/api/products/:id         --> put / patch product
    localhost:3000/api/products/:id         --> delete one product
*/


exports.getAllProducts =  (req, res) => {
    
    db.then((connection) => {
        connection.query("select * from products").then((datas) => {
            res.json(datas)
        })
    })


}


exports.getOneProduct = (req, res) => {

    let id = req.params.id
    db.then((connection) => {
        connection.query("select * from products where id = ?", [id]).then((datas) => {
            res.json(datas)
        })
    })

}


exports.postProduct = (req, res) => {

    let name = req.body.name
    let price = req.body.price

    db.then((connection) => {
        //j'ai, à cet endroit, l'objet de connection, le lien à la db,
        //je vais faire un insert into, dans products, j'ai besoin de lui donner name et price -> (name, price)
        //avec les valeurs (?, ?) 
        //pour sécuriser la requète, je lui donne un tableau contenant par ordre !!!! les paramètres demandé
        //donc -> [name, price], le premier ? contiendra name, et le deuxième ? contiendra price
        connection.query("insert into products (name, price) values (?, ?)", [name, price]).then((result) => {
            res.json(result)
        })
    })
}


exports.putProduct = (req, res) => {
    
}


exports.deleteProduct = (req, res) => {
    res.json({
        message : "Produit bien supprimé"
    })
}
