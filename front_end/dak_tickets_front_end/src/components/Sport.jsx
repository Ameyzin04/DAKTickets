import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

export default function Sport () {
    let {sportId} = useParams()
    const [sport , setSport] = useState ([])
    useEffect(() => {
        const getSport = async () => {

        
        try {
            const response = await axios.get(`http://localhost:8000/event/`)
            console.log(respnose.data)
            setSport (response.data)
            console.log(sport)
        } catch (e) {
            console.error("error fetching", e)
        }
    }

    getSport()
    }, [sportId])
    return(
        <div className='sport'>
            <h1>All Sports events near you</h1>
            {sport.map((sport)=>{
                return(
                    <div>
                        <img src={sport.img_path} alt=""/>
                        <h2>{sport.time}</h2>
                        <h2>{sport.nanme}</h2>
                        <h3>{sport.venue}</h3>
                    </div>

                )
            }
            )}
        </div>
    )

  
    
}
