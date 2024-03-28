import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Template.css';

export default function Nav() {
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [loggedIn,setLoggedIn] =useState( localStorage.getItem('loggedIn'));


    const handleSignOut = () => {
        setLoggedIn(false);
        localStorage.removeItem('username');
        setUsername(null);
    };

    
console.log(loggedIn, username)
    return (
        <div className="nav-container">
            <div className='left-nav-panel'>
                <Link to='/'>Home</Link>
                <Link to='/concert'>Concert</Link>
                <Link to='/sport'>Sport</Link>
            </div>
            {loggedIn ? ( <div>
                            <span className="welcome-message">Welcome, {username}</span>
                            <button type="button" onClick={handleSignOut}>Sign Out</button>
                        </div>
            ): (
            <div className='right-nav-panel'>
                <img className='userlogin-logo' src='./src/assets/userlogin.svg' alt="User Login Logo"></img>
                <Link to='/login'>Login</Link>/
                <Link to='/registration'>Registration</Link>
            </div>
                )}
        </div>
    );
}
