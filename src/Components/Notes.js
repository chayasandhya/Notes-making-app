import React from "react";

const Notes = (props) => {
  return (
    <div className="input_container">
      <h2>{props.note.title}</h2>
      <p>{props.note.body}</p>
      <button onClick={() => props.deleteNote(props.index)}>X</button>
    </div>
  );
};

export default Notes;
