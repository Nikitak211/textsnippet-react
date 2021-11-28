const express = require('express');
const router = express.Router();

const txtgen = require('txtgen');
router.post('/generateText', (req, res) => {

    //gets the body of score from the fetch option.
    const sum = req.body.score;

    // checks for letters and empty spaces, and bug preventing ..
    if (sum === "") {
        res.send({
            failure: true,
            error: 'Number Of Paragraphs , field cannot be empty.'
        })
    } else if (isNaN(sum)) {
        res.send({
            failure: true,
            error: 'Number Of Paragraphs , field must contain only numbers.'
        })
    } else if (sum > 10) {
        res.send({
            failure: true,
            error: 'Number Of Paragraphs cannot be higher than 10.'
        })
    } else if (sum <= 0) {
        res.send({
            failure: true,
            error: 'Number Of Paragraphs cannot be lower than 1.'
        })
    } else {
        //generates a random text .
        const textsnippet = txtgen.paragraph([sum])

        //sends data to the adress /generateText .
        res.send({
            success: true,
            message: textsnippet
        })
    }
})

module.exports = router;