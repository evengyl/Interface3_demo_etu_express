const mysql = require('promise-mysql');
let db = null

const singletonDB = {

    connect : () =>{
        if(db === null)
        {
            db = mysql.createPool({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'demo_web10_express',
                connectionLimit : 1000
            })
        }
    },

    get : () => {
        if(db === null)
            throw new Error("The db connect is incorrect")
        else
            return db
    }
}

module.exports = singletonDB
