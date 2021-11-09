import { useState } from "react";
import useFetch from "./useFetch";
const txtgen = require('txtgen')

const Container = () => {
    const [generate, setGenrate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const score = { generate };

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(score)
        }).then((error) => {
            console.log(error.message);
        })
    }

    const {data: context} = useFetch('/')
    const textsnippet = txtgen.paragraph([context])
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
                value={textsnippet}>
                
            </textarea>
        </div>
     );
}
 
export default Container;