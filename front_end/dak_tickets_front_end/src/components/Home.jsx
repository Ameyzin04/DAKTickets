import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";


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
          const response = await axios.get(`http://localhost:8000/sports`);
  
          setsports();
        };
        getGames();
    
        const getCencerts = async () => {
            const response = await axios.get("http://localhost:8000/concerts");
      
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
    const pick4RandomSport= () => {
    const shuffledArray = sports.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 5);
  };
    
  const pick4RandomConcert= () => {
    const shuffledArray = concerts.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 2);
  };
}