import React, { useEffect, useState } from 'react';
import './eventsgrid.css';

const EventGrid = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');

  const handleSearch = () => {
    let filteredData = events;
    if (searchQuery !== "") {
      filteredData = events.filter(event => event.category === searchQuery);
    }
    setFilteredEvents(filteredData);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleAttendButtonClick = (eventId) => {
    const attendeeName = prompt('Enter your name:');
    const attendeeEmail = prompt('Enter your email:');

    setAttendeeName(attendeeName);
    setAttendeeEmail(attendeeEmail);

    fetch('http://localhost:9292/attendees/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventId,
        attendeeName,
        attendeeEmail,
      }),
    })
      .then(response => response.json())
      .then(data => {
        alert(`Attendee ID: ${data.id}`);
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetch('http://localhost:9292/events')
      .then(response => response.json())
      .then(data => {
        setEvents(data);
        setFilteredEvents(data);
        const uniqueCategories = [...new Set(data.map(event => event.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="search-form">
        <select
          id="event-category"
          value={searchQuery}
          onChange={handleInputChange}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
      <div className="event-grid">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} className="event-card__image" />
            <div className="event-card__content">
              <h3 className="event-card__title">{event.name}</h3>
              <p className="event-card__info">Date: {event.date}</p>
              <p className="event-card__info">Category: {event.category}</p>
              <p className="event-card__description">{event.description}</p>
              <button
                className="event-card__button"
                onClick={() => handleAttendButtonClick(event.id)}
              >
                Attend
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGrid;
