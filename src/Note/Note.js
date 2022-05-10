import React from "react";
import PropTypes from "prop-types";

const Note = ({note, onDelete }) => {
  console.log(' props в ноте',note);
  return (
    <div className="six wide column">
      <div className="ui card">
        <div className="content">
          <div className="description">{note.text}</div>
        </div>
        <button
          className="ui bottom attached button"
          onClick={() => onDelete(note.id)}
        >
          <i className="trash red icon"></i>
          Delete
        </button>
      </div>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string
  }),
  onDelete: PropTypes.func,
};

export default Note;
