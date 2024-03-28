import { Routes,Route } from "react-router-dom"

import Home from './Home'
import Login from './Login'
import Registration from './Registration'
import Concert from './Concert'
import Tickets from './Tickets'
import Sport from './Sport'
import SearchResult from "./SearchResult"
import Header from "./Header"
import { useState } from "react";

export default function Main(){

    
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");


    return(
        <div className="main-container">
               <div>
        <Header
  
       
        
        />
      </div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" 
                element={<Login  setLoggedIn={setLoggedIn}
                setUsername={setUsername}
                />}/>
                <Route path="/registration" element={<Registration />}/>
                <Route path="/searchresult/:searchContent" element={<SearchResult />}/>
                <Route path="/concert" element={<Concert/>} />
                <Route path="/sport" element={<Sport/>}/>
                <Route path="/tickets" element={<Tickets/>}/>
            </Routes>
        </div>
    )
}