import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [displayTextArray, setDisplayTextArray] = useState([]);
  const [editTextArray, setEditTextArray] = useState([]);
  const [modifiedText, setModifiedText] = useState("")

  // editTextArray.fill(false);
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleEnter = (text) => {
    setDisplayTextArray([...displayTextArray, text]);// modify to previous state
    setEditTextArray([...editTextArray, false]);
  };

  const handleDeleteText = (index) => {
    const newTextArray = [...displayTextArray];
    newTextArray.splice(index, 1);
    setDisplayTextArray(newTextArray);
    const newEditArray = [...editTextArray];
    newEditArray.splice(index, 1);
    setEditTextArray(newEditArray)
  };

  const handleEditText = (index) => {
    const newEditTextArray = [...editTextArray];
    newEditTextArray[index] = true;
    console.log("new array", newEditTextArray);
    setEditTextArray(newEditTextArray);
  };

  const handleSaveText = (index) => {
    const newDisplayTextArray = [...displayTextArray];
    newDisplayTextArray[index] = modifiedText;
    setDisplayTextArray(newDisplayTextArray);
    const newEditArray = [...editTextArray];
    newEditArray[index] = false;
    setEditTextArray(newEditArray);
    setModifiedText("")
  }

  const handleModifiedText = (e) => {
    setModifiedText(e.target.value)
  }


  console.log("displayTextArray", displayTextArray);
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => handleInputText(e)}
      />
      <button onClick={() => handleEnter(inputText)}>Enter</button>
      <ul>
        {displayTextArray.map((text, index) => {
          return (
            <div key={`${index}-${text}`}>
              {" "}
              {editTextArray[index] ? (
                <div>
                  <input type="text" value={modifiedText} onChange={(e) => handleModifiedText(e)} />
                  <button onClick={() => handleSaveText(index)}>save</button>{" "}
                </div>
              ) : (
                <div>
                  <li>{text}</li>
                  <button onClick={() => handleEditText(index)}>edit</button>
                </div>
              )}
              <button onClick={() => handleDeleteText(index)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
