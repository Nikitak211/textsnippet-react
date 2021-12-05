import { useState, useEffect, useRef } from "react";

const Homepage = () => {
    const [amountOfSnippets, setamountOfSnippets] = useState('')
    const [text, setText] = useState('')
    const [failed, setFailed] = useState('')
    const [soundText, setSoundText] = useState('')
    const [button, setButton] = useState('')
    const [muted, setMuted] = useState(false)
    const [className, setClassName] = useState('')
    const url = '/api/generateText' ;

    const synth = useRef();

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        synth.current.speak(utterance);
    }

    const textReader = async () => {
        if (muted) {
            setMuted(false);
            setButton("On");
            setSoundText("speech Off")
            setClassName("sound-text")
        } else {
            setMuted(true);
            setButton("Off");
            setSoundText("speech On");
            setClassName("sound-text on")
        }
    }

    const handleSubmit = async () => {

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        await fetch(url , {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ score: amountOfSnippets || 1})
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
                    if (muted) speak(data.message);
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
        setButton("On");
        setSoundText("speech Off")
        setClassName("sound-text")
        synth.current = window.speechSynthesis;
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
            <button
                className="sound-button"
                onClick={textReader}
            >{button}</button>
            <small
                className={className}
                onChange={e => setSoundText(e.target.value)}
            >{soundText}</small>
            <input
                type="text"
                required
                value={amountOfSnippets}
                placeholder={1}
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