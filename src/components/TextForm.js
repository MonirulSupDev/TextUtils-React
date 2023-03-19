import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");

  //Allowing to write in the text box
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  //Uppercase
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };

  //Lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };

  //Clear Text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!","success");
  };

  //Copy text
  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!","success");
  };

  //Handle Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success");
  };
  // text = "new text"; //wrong way to change the state.
  // setText("new text"); // wright way to change the state.
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#1a437b",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Covert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Covert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summery</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} caracters.
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.lenght!==0}).length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview."}
        </p>
      </div>
    </>
  );
}
