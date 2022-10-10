import React from 'react';

const Notes = ({list}) => {
  return (
    <div>
      <h1>My Notes</h1>
      <div className="notes-list">
        {list.map((each) => (
          <div className="note" key={each.title}>
            <div className="note-title"><h3>{each.title}</h3></div>
            <div className="note-category"><h4>{each.category}</h4></div>
            <div className="note-desc">{each.tagline}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notes;