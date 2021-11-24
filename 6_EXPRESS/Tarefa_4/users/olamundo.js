const express = require('express');
const router = express.Router()
const path = require('path')


const basepath = path.join(__dirname, '../templates')

router.get("/olamundo" , (req, res) => {
    res.sendFile(`${basepath}/olamundo.html`)
})



module.exports = router