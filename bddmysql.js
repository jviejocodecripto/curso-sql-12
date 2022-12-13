const mysql = require("mysql8")

const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "my-secret-pw",
    database: "northwind"
})

function q(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, function (error, results, fields) {
            if (error) reject(error)
            return resolve(results)
        })
    })
}

q("select City from Customers limit 10").then(datos => {
    console.log(datos)
}).catch(err => {
    console.log(err)
})