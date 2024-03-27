import Nav from './Nav'
import '../styles/Template.css'

export default function Header() {
    return (
        <div className="header-container">
            <div className="logo-container">
                {/* <h1>DAK TICKETS</h1> */}
                <img className="active-member animations" src='/src/assets/Active-Members.png' style={{ width: '150px', height: '100px', border: 'none' }}></img>
                <img className="logo-iframe animations" src="/src/assets/DAK-Logo-A-1.gif"
                    // src="/src/assets/Logo.gif" 
                    style={{ width: '150px', height: '100px', border: 'none' }} 
                    title="Project Logo" 
                />
                <img className="promotion animations" src='/src/assets/Promotion.gif' style={{ width: '150px', height: '100px', border: 'none' }} alt="" />
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
