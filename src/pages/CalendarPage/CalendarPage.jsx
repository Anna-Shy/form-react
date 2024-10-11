import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { Aside } from "../../components/aside/Aside";
import { Header } from "../../components/header/Header";
import { AddEvent } from "../../components/addEvent/AddEvent";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendarPage.scss";

const localizer = momentLocalizer(moment);

export const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
    color: "#000000",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentEventId, setCurrentEventId] = useState(null);

  const handleSelectSlot = ({ start, end }) => {
    setEventDetails({ title: "", start, end, color: "#000000" });
    setIsEditing(false);
  };

  const handleSelectEvent = (event) => {
    setEventDetails({
      title: event.title,
      start: event.start,
      end: event.end,
      color: event.color,
    });
    setIsEditing(true);
    setCurrentEventId(event.id);
  };

  const handleChange = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateEvent = () => {
    if (eventDetails.title.length > 30) {
      alert("Event title must be 30 characters or less.");
      return;
    }

    if (isEditing) {
      setEvents(
        events.map((event) =>
          event.id === currentEventId
            ? { ...eventDetails, id: currentEventId }
            : event
        )
      );
    } else {
      const newEvent = { ...eventDetails, id: Date.now() };
      setEvents([...events, newEvent]);
    }

    setEventDetails({
      title: "",
      start: new Date(),
      end: new Date(),
      color: "#000000",
    });
    setIsEditing(false);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((event) => event.id !== currentEventId));
    setEventDetails({
      title: "",
      start: new Date(),
      end: new Date(),
      color: "#000000",
    });
    setIsEditing(false);
  };

  const handleDragEvent = (event, { start, end }) => {
    setEvents(
      events.map((ev) => (ev.id === event.id ? { ...ev, start, end } : ev))
    );
  };

  return (
    <div className="calendarPage">
      <Aside />

      <div className="calendarPage__main">
        <Header />

        <main className="calendarPage__main">
          <h2 className="main__title">Calendar</h2>
          <div className="main__calendar">
            <p className="calendar-text">Calendar View</p>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              className="calendar-calendar"
              selectable
              onSelectSlot={handleSelectSlot}
              onSelectEvent={handleSelectEvent}
              onEventDrop={handleDragEvent}
            />

            <AddEvent
              eventDetails={eventDetails}
              isEditing={isEditing}
              onChange={handleChange}
              onSubmit={handleAddOrUpdateEvent}
              onDelete={handleDeleteEvent}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
