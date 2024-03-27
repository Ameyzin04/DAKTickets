import { Routes,Route } from "react-router-dom"

import Home from './Home'
import Login from './Login'
import Registration from './Registration'
import Concert from './Concert'
import Tickets from './Tickets'
import Sport from './Sport'


export default function Main(){
    return(
        <div className="main-container">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/registration" element={<Registration />}/>
                <Route path="/concert" element={<Concert/>} />
                <Route path="/sport" element={<Sport/>}/>
                <Route path="/tickets" element={<Tickets/>}/>
            </Routes>
        </div>
    )
}