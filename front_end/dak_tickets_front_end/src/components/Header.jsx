import Nav from './Nav'
import '../styles/Template.css'

export default function Header() {
    return (
        <div className="header-container">
            <div className="logo-container">
                <h1>DAK TICKETS</h1>
            {/* <img
                    className="logo-iframe"
                    src="https://www.canva.com/design/DAGAocdasWg/XEohiKzAI9A52LymudMa3w/watch?utm_content=DAGAocdasWg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                    style={{ width: '100px', height: '100px', border: 'none' }} // Example of inline style as an object
                    title="Project Logo" // Adding a title for accessibility
                /> */}
                {/* <iframe class="logo-iframe" src="https://www.canva.com/design/your_design_code/embed?utm_content=your_design_code&utm_campaign=designshare&utm_medium=embeds&utm_source=link" style="width:1024px;height:768px;"></iframe> */}
            </div>
            <div className="nav-container">
                <Nav />
            </div>
            <div className="search-container">
            <input className='home-search-inputs' 
                    id='home_Search_inputs'
                   type="text"
                   placeholder='Seacrh by Venue, Sports Team or Artist'  />
            <button className='search-button'
                    id='home_search_button'
                    type="button">
                    SEARCH</button>
              
            </div>
        </div>
    )
}
