import React, {useState} from 'react';
import Note from './NoteView.jsx';

const Notes = ({list}) => {

  return (
    <div>
      <h1>My Notes</h1>
      <div className="notes-list">
        {list.map((each) => {
          const[note, setNote] = useState(false);
          const handleNote = (e) => {
            e.preventDefault();
            setNote(!note);
          }
          return(
          <div className="note" key={each.title} onClick={handleNote}>
            <div className="note-title"><h3>{each.title}</h3></div>
            <div className="note-category"><h4>{each.category}</h4></div>
            <div className="note-desc">{each.tagline}</div>
            <div>{note ? <Note each={each}/> : null}</div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Notes;