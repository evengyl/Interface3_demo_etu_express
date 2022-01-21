const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const usersRouter = require("./router/users.router")
app.use("/api/users", usersRouter)


app.listen(port, console.log(`Le serveur écoute sur le port ${port}`))