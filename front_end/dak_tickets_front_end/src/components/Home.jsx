import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "../style/Home.css";
// import '../style/Home'


export default function Home(){
    const [sports,setsports]= useState([]);
    const [concerts,setConcerts]= useState([])
    const [ads, setAds] = useState([]);

    const navigate = useNavigate();
    let showSports = (id) => {
      navigate(`sports/${id}`);
    };
  
    let showConcerts = (id) => {
      navigate(`/concerts/${id}`);
    };

    useEffect(() => {
        const getSports = async () => {
          const response = await axios.get(`http://localhost:8000/api/event`);
  
          setsports();
        };
        // getGames();
    
        const getCencerts = async () => {
            const response = await axios.get("http://localhost:8000/api/venue");
      
            setConcerts(response.data);
          };
          getCencerts();

          const getAds = async () => {
            const adResponse = await axios.get("http://localhost:8000/bannerAds");
            setAds(adResponse.data);
          };
      
          getAds();
        }, []);

        const pick1RandomAd = () => {
            const shuffledArray = ads.sort(() => 0.5 - Math.random());
            return shuffledArray.slice(0, 1);
          };
    const pick4RandomSports= () => {
    const shuffledArray = sports.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 5);
  };
    
  const pick4RandomConcerts= () => {
    const shuffledArray = concerts.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 2);
  };

return(
<div>
    <div>
        {pick1RandomAd().map((ad, index) => (
            <div
                className="home-ad-icon"
                key={ad._id}
                onClick={() => showSports(ad._id)}
                >
                <img
                className="home-random-ad-icon-image"
                src={ad.img_path}
                alt=""
                />
            </div>
    ))}
    </div>   


    <div>
        {pick4RandomSports().map((sport, index) => (
            <div
                className="home-sport-icon"
                key={sport._id}
                onClick={() => showSports(sport._id)}
                >
                <img
                className="home-random-sport-icon-image"
                src={sport.img_path}
                alt=""
                />
                <h3>{sport.title}</h3>
            </div>
    ))}
    </div>   

    <div>
  {pick4RandomConcerts().map((concert, index) => (
    <div
      className="home-concert-icon"
      key={concert._id}
      onClick={() => showConcerts(concert._id)}
    >
      <img
        className="home-random-concert-icon-image"
        src={concert.img_path}
        alt=""
      />
      <h3>{concert.title}</h3>
      </div>
    ))}
    </div>  



    </div>  
)

  
  }