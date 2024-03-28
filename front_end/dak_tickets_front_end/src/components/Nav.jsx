import { Link } from 'react-router-dom'


import '../styles/Template.css'

export default function Nav() {

    return (
        <div className="nav-container">
            <div className='left-nav-panel'>
                <Link to='/'>Home</Link>
                <Link to='/concert'>Concert</Link>
                <Link to='/sport'>Sport</Link>
            </div>
            <div className='right-nav-panel'>
                <img className='userlogin-logo' src='./src/assets/circle-user-solid.svg'></img>
                <Link to='/login'>Login</Link>/
                <Link to='/registration'>Registration</Link>
            </div>

        </div>
    )
}