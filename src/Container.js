import { useState } from "react";
import axios from "axios";
const txtgen = require('txtgen')

const Container = () => {
    const [generate, setGenrate] = useState('')
    const [text, setText] = useState('')
    const url = "http://localhost:3000/"
    const handleSubmit = async (e) => {
        e.preventDefault();
        const score = { generate };

        await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(score) 
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        })
    
    }

    fetch(url)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

    const textsnippet = txtgen.paragraph([generate])

    
    return ( 

        <div className="container">
            <h2 className="container-title">TextSnippet</h2>
            <input 
                type="text"
                required
                value={generate}
                onChange={(e) => setGenrate(e.target.value)}
                className="container-search" />

            <span 
                className="container-button"
                onClick={handleSubmit}>
            Generate</span>

            <textarea 
                placeholder="blablablabla"
                className="container-text"
                onChange={(e) => setText(e.target.value)}
                value={textsnippet}>
                
            </textarea>
        </div>
     );
}
 
export default Container;