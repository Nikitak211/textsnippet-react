const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

// route to 404 errors.
app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
})

// PORT and listen for the server.
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on port ${PORT}....`));