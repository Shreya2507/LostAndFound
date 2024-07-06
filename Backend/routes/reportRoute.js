const { Lost, Found } = require('./models/Report');

app.post('/api/reports/lost', async (req, res) => {
    try {
        const lostReport = new Lost(req.body);
        await lostReport.save();
        res.status(201).send(lostReport);
    } catch (error) {
        res.status(400).send(error);
    }
});


app.post('/api/reports/found', async (req, res) => {
    try {
        const foundReport = new Found(req.body);
        await foundReport.save();
        res.status(201).send(foundReport);
    } catch (error) {
        res.status(400).send(error);
    }
});