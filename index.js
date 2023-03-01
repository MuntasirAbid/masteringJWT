const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config()

const app = express()

/**
 * 
 * API
 * route
 * /users (paginated)
 * /user/create
 * /login
 * /register
 * /users (protected)
 *  
 * 
 * 
 */





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tkhdgb3.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



app.get('/test', (req, res) => {
    res.json({
        message: " its working"
    })
})

app.listen(process.env.PORT || 10000, () => {

    client.connect((err) => {

        if (err) {
            console.log(err);
        }
        else {

            console.log("Connected to mongoDB");
            client.close()
        }
    });
    console.log("server is running on " + process.env.PORT);
})