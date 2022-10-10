import React from 'react';

const Note = ({each}) => {
  return(
    <div className="noteView">
      {each.note}
    </div>
  )
};

export default Note;
