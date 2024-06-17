const express = require('express')
const Lost = require('../models/lost')
const router = express.Router()


//DISPLAY ALL
router.get('/showLost', async (req, res) => {
    try {
        const lostItems = await Lost.find();
        res.json(lostItems)

    } catch (error) {
        req.status(400).json({message: error.message})        

    }

})


module.exports = router