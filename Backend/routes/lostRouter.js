const express = require('express')
const Lost = require('../models/lost')
const router = express.Router()


//DISPLAY ALL LOST ITEMS
router.get('/showLost', async (req, res) => {
    try {
        const lostItems = await Lost.find();
        res.json(lostItems)

    } catch (error) {
        req.status(400).json({ message: error.message })

    }

})


//REPORT LOST ITEM
router.post('/addLost', async (req, res) => {
    const lostItem = new Lost({
        name: req.body.name,
        location: req.body.location,
        category: req.body.category,
        date: req.body.date,
        desc: req.body.desc,
    })

    try {
        const newLostItem = await lostItem.save()  //Save the item into database
        res.status(201).json(newLostItem)  //Successful

    } catch (error) {
        res.status(400).json({ message: error.message })  //Something wrong with user's input

    }

})




module.exports = router