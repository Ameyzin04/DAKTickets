import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import '../styles/Template.css'

export default function SearchResult(){
    
    const {searchContent} = useParams()
    const [resutls, setResults] = useState([])

useEffect(() => {
    axios.get('http://localhost:8000/event/')
    .then(Response => {
        setResults(Response.data)
    })
    .catch(error => {
        console.error("There was an error fetching the search results: ", error)
    })
},[searchContent])

return(
    <div className="search-result-container">
        <h1>Search Results</h1>
        {
            resutls.map( result => ( <div key={result.id}>{result.name} </div>))
        }
    </div>
)

}