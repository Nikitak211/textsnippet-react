import { useState, useEffect } from "react";

const Homepage = () => {
    const [amountOfSnippets, setamountOfSnippets] = useState('')
    const [text, setText] = useState('')
    const [faild, setFaild] = useState('')
    const url = "http://localhost:7000/api/generateText";

    const handleSubmit = (e) => {
        e.preventDefault();

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('GET', 'POST', 'OPTIONS');

        const ree = amountOfSnippets;

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ score: ree })
        })
        .then(response => {
            if (!response.ok) {
                throw Error('could not fetch the data')
            }
            return response.json()
        })
        .then(data => {
            if (data.success) {
                setText(data.message)
                setFaild("")
            }
            if (data.failure) {
                setFaild(data.error)
                setText("")
            }
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            }
            console.log(err.error)
        })
    }

    useEffect(() => {
        console.log('Entry was made')
    }, [])

    return (

        <div className="container">
            <textarea
                className="inputs-form"
                disabled
                oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
                onChange={e => setFaild(e.target.value)}
                value={faild}
            ></textarea>
            <h2 className="container-title">TextSnippet</h2>
            <input
                type="text"
                required
                value={amountOfSnippets}
                onChange={e => setamountOfSnippets(e.target.value)}
                className="container-search" />

            <button
                className="container-button"
                onClick={handleSubmit}>
                Generate</button>

            <textarea
                className="container-text"
                disabled
                onChange={e => setText(e.target.value)}
                value={text}>
            </textarea>
        </div>
    );
}
export default Homepage;