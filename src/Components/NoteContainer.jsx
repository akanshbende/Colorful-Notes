import React, { useEffect, useState } from "react";
import Note from "./Note";
// import { Typeahead } from "react-bootstrap-typeahead";
import FlipMove from "react-flip-move";
import SearchIcon from "@mui/icons-material/Search";
function NoteContainer(props) {
  const [paginate, setPaginate] = useState(true);
  const [allNotes, setAllNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // notes adding at last so to add first we reverse the array in which notes are stored
  const reverseArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  //  ' props.notes' is an array and new reverse array is stored in 'notes'
  const notes = reverseArray(props.notes);

  const filteredNotes = notes.filter((note) => {
    // Filter notes based on the searchQuery. Modify this condition according to your search logic.
    return (
      note?.title?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      note?.text?.toLowerCase().includes(searchQuery?.toLowerCase())
    );
  });
  return (
    <>
      <div className="note-container">
        <div className="note-header">
          <h3 className="heading">Rainbow Notes</h3>
          <span className="note-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon />
          </span>
          <span
            className="note-deleteAll"
            role="button"
            onClick={props.deleteAllNotes}
          >
            Delete All
          </span>
        </div>
        <div className="note-conatainer-wrapper custom-scroll">
          {filteredNotes?.length > 0 ? (
            filteredNotes.map((item) => {
              return (
                <Note
                  key={item?.id}
                  note={item}
                  deleteNote={props?.deleteNote}
                  updateText={props?.updateText}
                  updateTitle={props?.updateTitle}
                  // deleteAllNotes={props.deleteAllNotes}
                />
              );
            })
          ) : (
            <>
              <FlipMove>
                {notes?.length > 0 ? (
                  notes.map((item) => (
                    <Note
                      key={item?.id}
                      note={item}
                      deleteNote={props?.deleteNote}
                      updateText={props?.updateText}
                      updateTitle={props?.updateTitle}
                      // deleteAllNotes={props.deleteAllNotes}
                    />
                  ))
                ) : (
                  <>
                    <div className="no-notes">
                      {" "}
                      <img src="\no-notes.jpg" alt="" width={500} />
                      <h3
                        style={{
                          marginTop: "2rem",
                          fontFamily: "Poppins",
                          fontSize: "2rem",
                          fontWeight: "500",
                        }}
                      >
                        No Notes Present
                      </h3>
                    </div>
                  </>
                )}
              </FlipMove>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default NoteContainer;
