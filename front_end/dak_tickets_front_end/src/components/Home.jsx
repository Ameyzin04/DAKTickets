import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";


export default function Home() {
  const [sports, setSports] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [ads, setAds] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getSports = async () => {
      const response = await axios.get(`http://localhost:8000/api/event`);
      setSports(response.data);
    };
    getSports();

    const getConcerts = async () => {
      const response = await axios.get("http://localhost:8000/api/venue");
      setConcerts(response.data);
    };
    getConcerts();

    const getAds = async () => {
      const adResponse = await axios.get("http://localhost:8000/bannerAds");
      setAds(adResponse.data);
    };
    getAds();
  }, []);

  const showSports = (id) => {
    navigate(`sports/${id}`);
  };

  const showConcerts = (id) => {
    navigate(`/concerts/${id}`);
  };

  const pick1RandomAd = () => {
    const shuffledArray = ads.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 1);
  };

  const pick4RandomSports = () => {
    const shuffledArray = sports.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 5);
  };

  const pick4RandomConcerts = () => {
    const shuffledArray = concerts.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 2);
  };

  return (
    <div>
      <div>
        {pick1RandomAd().map((ad, index) => (
          <div className="home-ad-icon" key={ad._id} onClick={() => showSports(ad._id)}>
            <img className="home-random-ad-icon-image" src={ad.img_path} alt="" />
          </div>
        ))}
      </div>
  
      <div>
        {pick4RandomSports().map((event, index) => {
          if (event.type === 'sport') {
            return (
              <div className="home-sport-icon" key={event._id} onClick={() => showSports(event._id)}>
                <img className="home-random-event-icon-image" src={event.img_path} alt="" />
                <h3>{event.name}</h3>
              </div>
            );
          }
          return null; // or an alternative if you want to skip rendering
        })}
      </div>
  
      <div>
        {pick4RandomConcerts().map((event, index) => {
          if (event.type === 'concert') {
            return (
              <div className="home-concert-icon" key={event._id} onClick={() => showConcerts(event._id)}>
                <img className="home-random-concert-icon-image" src={event.img_path} alt="" />
                <h3>{event.name}</h3>
              </div>
            );
          }
          return null; // or an alternative if you want to skip rendering
        })}
      </div>
    </div>
  );
      }