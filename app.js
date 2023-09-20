require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT

app.use(bodyParser.json());

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}


app.post('/sort', (req, res) => {
    try {
        const { sortKeys, payload } = req.body;
    
        if (!sortKeys) {
            return res.status(400).json({ error: 'sortKeys is misssing on JSON.' });
        } else if (!payload) {
            return res.status(400).json({ error: 'payload is missing on JSON.' });
        }
    
        // Sort matrixes by specified keys
        sortKeys.forEach((key) => {
            if (Array.isArray(payload[key])) {
                payload[key] = quickSort(payload[key]);
            }
        });
        console.log(payload);
        return res.status(200).json(payload);
    } catch (error) {
        console.error('Request error: ', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

app.listen(PORT, () => {
    console.log(`Service listening on port ${PORT}`);
});
