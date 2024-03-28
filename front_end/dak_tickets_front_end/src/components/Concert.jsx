import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

export default function Concert () {
    let {concertsId} = useParams()
    const [concerts , setConecrts] = useState ([])
    useEffect(() => {
        const getConcerts = async () => {

        
        try {
            const response = await axios.get(`http://localhost:8000/event/`)
            console.log(respnose.data)
            setConecrts (response.data)
            console.log(concerts)
        } catch (e) {
            console.error("error fetching", e)
        }
    }

    getConcerts ()
    }, [concertsId])
    return(
        <div className='concert'>
            <h1>All Concerts near you</h1>
            {concerts.map((concerts)=>{
                return(
                    <div>
                        <img src={concerts.img_path} alt=""/>
                        <h2>{concerts.time}</h2>
                        <h2>{concerts.nanme}</h2>
                        <h3>{concerts.venue}</h3>
                    </div>

                )
            }
            )}






        </div>
    )

  
    
}
