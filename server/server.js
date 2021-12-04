const path = require("path");
const express = require('express');
const textSnippet = require('../api/textSnippet.js');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("src"));

app.use('/api', textSnippet);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });

// PORT and listen for the server.
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`listening on port ${PORT}....`));