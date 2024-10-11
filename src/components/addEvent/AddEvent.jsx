import React from "react";

import "./addEvent.scss";

export const AddEvent = ({
  eventDetails,
  isEditing,
  onChange,
  onSubmit,
  onDelete,
}) => {
  return (
    <div className="form">
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        className="form-input"
        value={eventDetails.title}
        onChange={onChange}
      />
      <input
        type="datetime-local"
        name="start"
        className="form-input"
        value={eventDetails.start.toISOString().slice(0, 16)}
        onChange={(e) =>
          onChange({
            target: { name: "start", value: new Date(e.target.value) },
          })
        }
      />
      <input
        type="datetime-local"
        name="end"
        className="form-input"
        value={eventDetails.end.toISOString().slice(0, 16)}
        onChange={(e) =>
          onChange({ target: { name: "end", value: new Date(e.target.value) } })
        }
      />
      <input
        type="color"
        name="color"
        className="form-input"
        value={eventDetails.color}
        onChange={onChange}
      />

      <div className="form-btn">
        <button onClick={onSubmit}>
          {isEditing ? "Update Event" : "Add Event"}
        </button>

        {isEditing && (
          <button onClick={onDelete}>
            Delete Event
          </button>
        )}
      </div>
    </div>
  );
};
