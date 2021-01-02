import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Notes from "./Components/Notes";

function App() {
  const [notes, setNotes] = useState([]);
  function collectNotes(note) {
    const notesCpy = [...notes, note];

    setNotes(notesCpy);
  }

  function deleteNote(indx) {
    const finalNotes = notes.filter((each, i) => {
      return i != indx;
    });
    setNotes(finalNotes);
  }
  return (
    <div className="app_container">
      <Input collectNotes={collectNotes}></Input>
      {notes.map((each, i) => {
        return (
          <Notes key={i} index={i} note={each} deleteNote={deleteNote}></Notes>
        );
      })}
    </div>
  );
}

export default App;
