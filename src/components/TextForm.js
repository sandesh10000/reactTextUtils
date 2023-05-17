import React, { useState } from "react";

export default function TextForm(props) {
  const uppercase=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to upper case","success");
  };
  const lowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lower case","success");
  };
  const speak=()=>{
    let speechtext=new SpeechSynthesisUtterance();
    speechtext.text=text;
    window.speechSynthesis.speak(speechtext);
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handleCopy=()=>{
    console.log("I am copy")
    var text=document.getElementById("exampleFormControlTextarea1")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("coppied to clipboard","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra spaces removed ","success");
  }
  const [text, setText] = useState("");
  //setText("new text");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          style={{backgroundColor:props.mode==='dark'?'#076e3e':'white'}}
          onChange={handleonchange}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={uppercase}>
        Convert to UpperCase
      </button>
      <span> </span>
      <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={lowercase}>
        Convert to lowercase
      </button>
      <span> </span>
      <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={speak}>
        Speak
      </button>
      <span> </span>
      <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>
        Copy
      </button>
      <span> </span>
      <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>
        Remove Extra White Spaces
      </button>
    </div>
    <div className="container2 my-3 mx-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>text summery</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}Words and  {text.length}characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  );
}
