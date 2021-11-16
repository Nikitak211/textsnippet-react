import { useState,useEffect } from "react";

const Homepage = () => {
    const [amountOfSnippets, setamountOfSnippets] = useState('')
    const [text, setText] = useState('')
    
    const url = "http://localhost:7000/api/generateText";

    const handleSubmit = (e) => {
        e.preventDefault();

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('GET', 'POST', 'OPTIONS');


        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({score: amountOfSnippets})
        })
        fetch(url)
        .then(response => {
            if(!response.ok){
               throw Error('could not fetch the data')   
            }
            return response.json()
        })
        .then(data => {
            setText(data);
        })
        .catch(err =>{
            if (err.name === 'AbortError'){
                console.log('fetch aborted')
            } else {
                console.log(err.message)
            }
        })
    }
    useEffect(() => {
        console.log('Entry was made')
    },[])

    return ( 

        <div className="container">
            <h2 className="container-title">TextSnippet</h2>
            <input 
                type="text"
                required
                value={amountOfSnippets}
                onChange={ e => setamountOfSnippets(e.target.value)}
                className="container-search" />

            <button 
                className="container-button"
                onClick={handleSubmit}>
            Generate</button>

            <textarea 
                placeholder="blablablabla"
                className="container-text"
                disabled
                onChange={ e => setText(e.target.value)}
                value={text}>
            </textarea>
        </div>
     );
}
export default Homepage;