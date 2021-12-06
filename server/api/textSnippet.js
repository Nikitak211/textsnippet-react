const express = require('express');
const router = express.Router();

const txtgen = require('txtgen');
router.post(`/generateText/?` , (req, res) => {

    //gets the body of score from the fetch option.
    const sum = req.query.score;
    // checks for letters and empty spaces, and bug preventing ..
    if (sum === "") return  res.send({
        failure: true,
        error: 'Number Of Paragraphs , field cannot be empty.'
    })
    if (isNaN(sum)) return res.send({
        failure: true,
        error: 'Number Of Paragraphs , field must contain only numbers.'
    })
    if (sum > 10) return res.send({
        failure: true,
        error: 'Number Of Paragraphs cannot be higher than 10.'
    })
        
    if (sum <= 0) return res.send({
        failure: true,
        error: 'Number Of Paragraphs cannot be lower than 1.'
    })
        
    //generates a random text .
    const textsnippet = txtgen.paragraph([sum])

    //sends data to the adress /generateText .
    res.send({
        success: true,
        message: textsnippet
    })
})

module.exports = router;