import React from 'react'
// import './Navbar.css'
//  Theme 2
import './Navbar.css'
// Theme 3 
// import './Navbar3.css'

import Logo from '../../assets/tmdb3.svg'
// import Movie from '../../assets/light/apple/imovie.png'
// import Tv from '../../assets/light/non-apple/youtube.png'

const Navbar = () => {

    return(
        <>
            <nav className="navbar">
                <div className="navbar--logo-holder">
                    <img src={Logo} alt="Logo" className="navbar--logo"/> 
                    {/* <img src={Movie} alt="Home" className="navbar--movie"/> */}
                    {/* <img src={Tv} alt="Logo" className="navbar--tv"/> */}
                    
                </div>
                <ul className="navbar--link">
                    <li className="navbar--link-item"><a href="#Movies"> Movies</a></li>
                    <li className="navbar--link-item"><a href="#TvShows">Tv Shows  </a></li>
                    {/* <li className="navbar--link-item"><a href="#People">People</a></li> */}
                   
                </ul>
            </nav>

        </>
    )
}

export default Navbar;