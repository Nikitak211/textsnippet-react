import { useState, useEffect } from "react";

let readSpeech = false;
let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

const Homepage = () => {
    const [amountOfSnippets, setamountOfSnippets] = useState('')
    const [text, setText] = useState('')
    const [failed, setFailed] = useState('')
    const [soundText, setSoundText] = useState('')
    const [button, setButton] = useState('')
    const url = "/api/generateText";

    const textReader = async () => {
        if (readSpeech) {
            readSpeech = false;
            setButton("On");
            setSoundText("speech Off")
        } else {
            readSpeech = true;
            setButton("Off");
            setSoundText("speech On");
        }
    }

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
                    speech.text = data.message;
                    if (readSpeech) window.speechSynthesis.speak(speech)
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
        setButton("Off");
        setSoundText("speech On")
    }, [])

    return (

        <div className="container">
            <textarea
                className="inputs-form"
                disabled
                onChange={e => setFailed(e.target.value)}
                value={failed}
            ></textarea>
            <h2 className="container-title">TextSnippeting</h2>
            <button
                className="sound-button"
                onClick={textReader}
            >{button}</button>
            <small
                className="sound-text"
                onChange={e => setSoundText(e.target.value)}
            >{soundText}</small>
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