const mysql = require("mysql2")
require("dotenv").config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port:process.env.DB_PORT,
});

connection.connect((err) => {
    if(err){
        console.error('Error connecting to Aiven MySQL:', err)
        return
    }
    console.log('Connected to Aiven MySQL')
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS schools (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255),
            latitude DECIMAL(9,6) NOT NULL,
            longitude DECIMAL(9,6) NOT NULL
        );`
    connection.query(createTableQuery,(err,result)=>{
        if (err) {
            console.error('Error creating table:', err);
        } else {
            console.log('Table "schools" created successfully');
        }
    })

})

module.exports = connection