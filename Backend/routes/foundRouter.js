const express = require('express')
const Found = require("../models/found")
const router = express.Router()


//REPORT FOUND ITEM
router.post('/addFound', async (req, res) => {
    const foundItem = new Found({
        name: req.body.name,
        location: req.body.location,
        category: req.body.category,
        date: req.body.date,
        desc: req.body.desc,
    })

    try {
        const newFoundItem = await foundItem.save()  //Save the item into database
        res.status(201).json(newFoundItem)  //Successful

    } catch (error) {
        res.status(400).json({ message: error.message })  //Something wrong with user's input

    }

})




module.exports = router