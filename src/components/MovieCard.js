import {React, useState} from 'react'
import Logo from '../assets/tmdb5.svg'
// import LikeBtn from './LikeBtn/LikeBtn'
// import DisLikeBtn from './DisLikeBtn/DisLike'
import { faHeart } from "@fortawesome/free-solid-svg-icons"; 
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MovieCard = (props) => {
    const {movie} = props
    const [likes, setLikes] = useState(0)
    return(
        <div className="card" key={movie.id}>
            <div className="card--header"> 
                <img src={Logo} alt="Logo" className="Card-logo"/>          
                <h1 className="card--title">{movie.title}</h1>
            </div>
            <div className="card--content">
                <img className="card--image"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + 'poster'}  
                         />
                <div className="card--data"> 
                    {/* <div className="data--header">           
                        <h1 className="data--title">Details</h1>
                    </div> */}
                    <div className="data--details">                     
                        {/* <h5><small>TITLE: {movie.title}</small></h5> */}
                        <h5><small>DATE: {movie.release_date}</small></h5>
                        <h5><small>VOTE AVG: {movie.vote_average}</small></h5>
                        <h5><small>VOTES: {movie.vote_count}</small></h5>
                        <h5><small>POPULARITY: {movie.popularity}</small></h5>
                    </div>    
                </div>
            </div>
                
                <div className="card_desc">  
                    <div className="desc--header">           
                        <h1 className="desc--title">Description</h1>
                    </div> 
                    <div className="desc-box">         
                        <p >{movie.overview}</p>
                    </div>              
                </div>
            <div className="Btn-card">          
               <button className="btn" onClick={() => setLikes(likes + 1)}>
                   <FontAwesomeIcon icon={faHeart} className="heart"/>
                     <span> | {likes} </span>
                </button>
               <button className="btn" onClick={() => setLikes(likes - 1)}>
                    <FontAwesomeIcon icon={faHeartBroken} className="heart"/>
                     <span> | {likes} </span>
               </button>
            </div>
      </div>
    )
}

export default MovieCard;