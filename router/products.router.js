const express = require("express")
const router = express.Router()


// localhost:3000/api/products/            --> get all
router.get("/", (req, res) => {
    res.json({
        message : "Listes de tous les produits"
    })
})


// localhost:3000/api/products/:id         --> get one by id
router.get("/:id", (req, res) => {
    res.json({
        message : "le produit que vous avez demandé"
    })
})


// localhost:3000/api/products/            --> post product
router.post("/", (req, res) => {
    res.json({
        message : "Produit créé"
    })
})


// localhost:3000/api/products/:id         --> put / patch product
router.put("/:id", (req, res) => {
    res.json({
        message : "Produit modifié"
    })
})


// localhost:3000/api/products/:id         --> delete one product
router.delete("/:id", (req, res) => {
    res.json({
        message : "Produit bien supprimé"
    })
})



module.exports = router