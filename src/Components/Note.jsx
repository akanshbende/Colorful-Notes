// import React from "react";
// import deleteIcon from "../../public/delete.png";

// //every time we dont want to update state so we are using debounce
// let timer = 500,
//   timeout;
// function Note(props) {
//   //format date to get proper date

//   const formatDate = (value) => {
//     if (!value) return "";

//     var monthNames = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];

//     const date = new Date(value);

//     let hrs = date.getHours();
//     let amPm = hrs > 12 ? "PM" : "AM";
//     hrs = hrs ? hrs : "12";
//     hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

//     let min = date.getMinutes();
//     min = min < 10 ? "0" + min : min;

//     let day = date.getDate();

//     let month = monthNames[date.getMonth()];

//     return `${hrs}:${min} ${amPm} \u00A0\  ${day} ${month}`;
//   };

//   // DEbouncer
//   const debounce = (func) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(func, timer);
//   };

//   const updateText = (text, id) => {
//     debounce(() => props.updateText(text, id));
//   };

//   return (
//     <>
//       <div className="note" style={{ backgroundColor: props.note.color }}>
//         <textarea
//           className="note-title"
//           defaultValue={props.note.title}
//           placeholder="Add Title"
//           onChange={(e) => updateText(e.target.value, e.target.id)}
//         />

//         <textarea
//           className="note-text"
//           defaultValue={props.note.text}
//           placeholder="Add Your Note Here"
//           onChange={(e) => updateText(e.target.value, e.target.id)}
//         />
//         <div className="note-footer">
//           <p className="note-time">{formatDate(props.note.time)}</p>
//           <img
//             src={deleteIcon}
//             alt="delete"
//             onClick={() => props.deleteNote(props.note.id)}
//           />
//         </div>
//       </div>
//     </>
//   );
//   s;
// }

// export default Note;

import React from "react";

import deleteIcon from "../../public/delete.png";

let timer = 500,
  timeout;
function Note(props) {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };
  const updateTitle = (title, id) => {
    debounce(() => props.updateTitle(title, id));
  };

  return (
    <div
      className="note"
      style={{ backgroundColor: props?.note?.color }}
      // deleteAll={deleteAll}
    >
      <textarea
        className="note-title"
        defaultValue={props.note.title}
        placeholder="Add Title"
        onChange={(e) => updateTitle(e.target.value, props.note.id)}
      />
      <textarea
        placeholder="Enter text here"
        className="note-text"
        maxLength="100"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note-footer">
        <p className="note-time">{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
