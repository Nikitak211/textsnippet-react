import { useState } from "react";
import axios from "axios";
const txtgen = require('txtgen')

const Container = () => {
    const [generate, setGenrate] = useState('')
    const [text, setText] = useState('')
    const data = {generate}
    const url = "http://localhost:8000/data"
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/data', data)
        axios('http://localhost:8000/data', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            data: JSON.stringify(data)
        }).then(() => {
            console.log("generated");
        })
    }
        
        axios.get(url)
        .then(response => {
            let data = response.data[0].generate
            let textsnippet = txtgen.paragraph([data])
            setText(textsnippet)
        })
        .catch(error => console.log(error))
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
                value={text}>
                
            </textarea>
        </div>
     );
}
 
export default Container;