import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  return (
    <div className="input_container">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Body"
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={() => props.collectNotes({ title, body })}>Save</button>
    </div>
  );
};

export default Input;
