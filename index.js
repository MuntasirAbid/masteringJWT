const express = require('express');
require("dotenv").config()

const app = express()

app.use("*", (req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

app.get('/test', (req, res) => {
    res.json({
        message: " its working"
    })
})

app.listen(process.env.PORT || 10000, () => {
    console.log("server is running on " + process.env.PORT);
})