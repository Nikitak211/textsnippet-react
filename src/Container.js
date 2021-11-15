import { useState } from "react";

const Container = () => {
    // Rename generate to "amountOfSnippets"
    const [generate, setGenrate] = useState('')
    const [text, setText] = useState('')
    const data = {generate}
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
    }
    return ( 

        <div className="container">
            <h2 className="container-title">TextSnippet</h2>
            <input 
                type="text"
                required
                value={generate}
                // Pretenses () aren't required if there is one argument (e)
                onChange={(e) => setGenrate(e.target.value)}
                className="container-search" />

            {/* Make sure you use a button element */}
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