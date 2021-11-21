import { useState, useEffect } from "react";

const Homepage = () => {
    const [amountOfSnippets, setamountOfSnippets] = useState('')
    const [text, setText] = useState('')
    const [failed, setFailed] = useState('')
    const url = "http://localhost:7000/api/generateText";

    const handleSubmit = async () => {

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ score: amountOfSnippets })
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
                    setFailed("")
                }
                if (data.failure) {
                    setFailed(data.error)
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
                onChange={e => setFailed(e.target.value)}
                value={failed}
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