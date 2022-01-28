exports.getAllProducts =  (req, res) => {
    res.json({
        message : "Listes de tous les produits"
    })
}


exports.getOneProduct = (req, res) => {
    res.json({
        message : "le produit que vous avez demandé"
    })
}


exports.postProduct = (req, res) => {
    res.json({
        message : "Produit créé"
    })
}


exports.putProduct = (req, res) => {
    res.json({
        message : "Produit modifié"
    })
}


exports.deleteProduct = (req, res) => {
    res.json({
        message : "Produit bien supprimé"
    })
}
