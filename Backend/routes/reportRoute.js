const { Lost, Found } = require('./models/Report');
const express = require('express');
const router = express.Router();

router.post('/reports/lost', async (req, res) => {
    try {
        const lostReport = new Lost(req.body);
        await lostReport.save();
        res.status(201).send(lostReport);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.post('/reports/found', async (req, res) => {
    try {
        const foundReport = new Found(req.body);
        await foundReport.save();
        res.status(201).send(foundReport);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = reportRoute;