import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")
  
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleToClear = () => {
        let newText = "";
        setText(newText);
    }
 
    const handleToCopy = () => {
        const newText = document.getElementById("Textarea");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <div className="container " style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white' }}>
                    <h4 className="my-2">Enter your text to anaylze them </h4>
                    <textarea className="form-control my-3" value={text} placeholder="Enter your text" id="Textarea" onChange={handleOnChange} rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0d377c', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                    <button className="btn-sm btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn-sm btn-danger mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn-sm btn-success mx-1 my-1" onClick={handleToClear}>Clear All</button>
                    <button className="btn-sm btn-warning mx-1 my-1" onClick={handleToCopy}>Copy All</button>
                  
                </div>
                <div className="container my-2">
                    <p>Summary contain {text?.split("/+s/ ").filter((element) => { return element.length !== 0 }).length} words and {text.length} charcter</p>
                    <p>{0.008 * text?.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>
                </div>
                <div className="container my-2">
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
