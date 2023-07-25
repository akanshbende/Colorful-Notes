// import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import NoteContainer from "./Components/NoteContainer";
// import SideBar from "./Components/SideBar";

// function App() {
//   const [notes, setNotes] = useState(
//     JSON.parse(localStorage.getItem("astro-pad")) || []
//   );

//   const addNote = (color) => {
//     const tempNotes = [...notes];

//     tempNotes.push({
//       id: Date.now() + "" + Math.floor(Math.random() * 78),
//       title: "",
//       text: "",
//       time: Date.now(),
//       color,
//     });
//     setNotes(tempNotes);
//   };

//   const deleteNote = (id) => {
//     // store all notes in tempory array
//     const tempNotes = [...notes];

//     // finding index of note to be delete
//     const index = tempNotes.findIndex((item) => item.id === id);

//     // if array is none i.e we dont get index
//     if (index < 0) return;

//     //splice take index and then how many elements he want to delete
//     tempNotes.splice(index, 1);

//     //put all this 'tempnotes' array elements back again in 'notes' by 'setnotes'
//     setNotes(tempNotes);
//   };

//   // update text of input
//   const updateText = (text, id) => {
//     // store all notes in tempory array
//     const tempNotes = [...notes];
//     // finding index of note to be delete
//     const index = tempNotes.findIndex((item) => item.id === id);

//     // if array is none i.e we dont get index
//     if (index < 0) return;

//     tempNotes[index].text = text;

//     //put all this 'tempnotes' array elements back again in 'notes' by 'setnotes'
//     setNotes(tempNotes);
//   };

//   useEffect(() => {
//     localStorage.setItem("astro-pad", JSON.stringify(notes));
//   }, [notes]);

//   return (
//     <>
//       <div className="App">
//         <SideBar addNote={addNote} />
//         <NoteContainer
//           notes={notes}
//           deleteNote={deleteNote}
//           updateText={updateText}
//         />
//       </div>
//     </>
//   );
// }

// export default App;

//=========================================================================
import React, { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import NoteContainer from "./Components/NoteContainer";
import Sidebar from "./Components/SideBar";
import { Helmet } from "react-helmet";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  // Add new Note
  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  // delete note;
  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  // Update Text

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  //Update Title 10-5-23

  const updateTitle = (title, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].title = title; // TITLE UPDATED 10-5-23
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  // Function of delete all notes
  const deleteAllNotes = () => {
    notes.splice(0, notes.length - 1);

    // localStorage.setItem("notes-app", JSON.stringify(tempArr));
    localStorage.removeItem("notes-app");
    setNotes([]);
    return;
  };

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quicki Notes</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
        updateTitle={updateTitle}
        deleteAllNotes={deleteAllNotes}
      />
    </div>
  );
}

export default App;
