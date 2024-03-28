import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import '../styles/Template.css'
import '../styles/searchResult.css'

export default function SearchResult(){
    
    const {searchContent} = useParams()
    const [results, setResults] = useState([])

useEffect(() => {
    axios.get('http://localhost:8000/event/')
    .then(Response => {
        console.log(Response)
        setResults(Response.data)
    })
    .catch(error => {
        console.error("There was an error fetching the search results: ", error)
    })

    
},[searchContent])

const filteredResult = results.filter(result =>
    result.name.toLowerCase().includes(searchContent.toLowerCase()))

return(
    <div className="search-result-container">
        <h3>Search Results</h3>
        {filteredResult.length > 0 ? (
                filteredResult.map(result => (
                    <div className="result-main" key={result.id}>
                        <img className="result-img" src={result.photo_url}/>
                        <div className="result-time"><span className="time">{result.time}</span></div>
                        <div className="result-button">
                            <div className="result-name"><span className="event-name">{result.name}</span></div>
                            <div className="result-venue"><span className="event-venue">{result.venue_name}</span></div>
                        </div>
                        <div className="result-button"><button className="see-button">See Tickets</button></div>                       
                    </div>
                ))
            ) : (
                <h1>Opps! Sorry, no records found!</h1>
            )}
    </div>
)

}