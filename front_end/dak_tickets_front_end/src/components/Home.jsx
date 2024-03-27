import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [venues, setVenues] = useState([]);

  const navigate = useNavigate();
  let showEvent = (id) => {
    navigate(`sport/${id}`);
  };

  let showVenue = (id) => {
    navigate(`/concert/${id}`);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get("http://localhost:8000/event/");
      setEvents(response.data);
    };

    const fetchVenues = async () => {
      const response = await axios.get("http://localhost:8000/venue/");
      setVenues(response.data);
    };

    fetchEvents();
    fetchVenues();
  }, []);

  const pick4RandomEvent = () => {
    const shuffledArray = events.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 4);
  };

  const pick4RandomVenue = () => {
    const shuffledArray = venues.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 4);
  };
  return (
    <div className="home-page-container">
      <h2>Events</h2>
      <div className="home-random-event-container">
        <div className="home-random-cards-container">
        {pick4RandomEvent().map((event) => (
          <div className="home-Event-icon" key={event.id}
          onClick={() => showEvent(event.id)} >

            <img className="home-random-event-icon-image"
            src={event.photo_url} alt={event.name} />
            <h3>{event.name}</h3>
          </div>
        ))}
       </div>
      </div>

      <h2>Venues</h2>
      <div className="home-random-venues-container">
        <div className="home-random-cards-container">
        {pick4RandomVenue().map((venue) => (
          <div className="home-Venue-icon" key={venue.id}
          onClick={() => showVenue(venue.id)} >
            
            <img className="home-random-venue-icon-image"
            src={venue.photo_url} alt={venue.name} />
            <h3>{venue.name}</h3>
          </div>
        ))}
     </div>
     </div>
    </div>
  );
};

export default Home;
