
import '../styles/Template.css'


import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

export default function Footer() {

    return (
        <div className='footer-container'>
            <div className='profile-container'>
                <div className="profile" id="ameyo">
                    Ameyo Kugbe 
                    <div><a href="https://github.com/amidmartinez"><img src={github}></img></a>
                    <a href="https://github.com/Ameyzin04"><img src={linkedin}></img></a></div>
                </div>
                <div className="profile" id="kevin">
                    Kevin Wang
                    <div><a href="https://github.com/toddlf705"><img src={github}></img></a>
                    <a href="https://github.com/kevinwang2882"><img src={linkedin}></img></a></div>
                </div>
                <div className="profile" id="denesh">
                    Denesh Anandathasan
                    <div><a href="https://github.com/DeneshA"><img src={github}></img></a>
                    <a href="https://www.linkedin.com/in/deneshananthadasan/"><img src={linkedin}></img></a></div>
                </div>
            </div>
        </div>
    )
}