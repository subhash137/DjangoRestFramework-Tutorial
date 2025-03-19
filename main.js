// main.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '')));

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
