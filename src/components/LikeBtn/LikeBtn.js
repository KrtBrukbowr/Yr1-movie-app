import {React, useState} from 'react'
import './LikeBtn.css'


const LikeBtn = () => {

    const [likes, setLikes] = useState(0)
    // const [dislikes, setDislikes] = useState(0)

    

    return(
       <>
            <button className="LikeBtn" onClick={() => setLikes(likes + 1)}>
                Likes | {likes}
             </button>
            {/* <p>{likes}</p> */}
            <button className="LikeBtn" onClick={() => setLikes(likes - 1)} >DisLikes | {likes} </button>
            {/* <p>{likes}</p> */}
     </>
    )
}
export default LikeBtn;