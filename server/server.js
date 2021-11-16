const express = require('express');
const app = express();

const textSnippet = require('../api/textSnippet.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', textSnippet);

app.get('/', (req, res) => {
    res.send('Hello World');
})

// route to 404 errors.
app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
})

// PORT and listen for the server.
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`listening on port ${PORT}....`));