const express = require("express")
const router = express.Router()



router.get("/", (req, res) => {
    res.json({
        message : "tu es connecté petit chat"
    })
})


router.post("/", (req, res) => {
    res.json({
        message : "Création du client ok"
    })
})



router.get("/logout", (req, res) => {
    res.json({
        message : "vous êtes déconnecté"
    })
})

module.exports = router