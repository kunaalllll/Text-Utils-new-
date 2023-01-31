import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log('UpperCase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "Success");
    }

    const handleLoClick = ()=>{
        // console.log('LowerCase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "Success");
    }

    const handleClearClick = ()=>{
      let newText = '';  
      setText(newText);
      props.showAlert("Text Cleared!", "Success");
  }
   
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "Success");
    }

    const handleExtraSpaces =() => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!", "Success");

    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("")
    // text = "new text";  // wrong way
    // setText("new text"); = "new text"  // correct way to change the state
  return (
    <>
      <div className="container"  style={{color: props.mode==='dark'? 'white': 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color: props.mode==='dark'? 'white': 'black'}} value={text} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>

  </div>

    <div className="container my-3" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
  </>

  )
}
