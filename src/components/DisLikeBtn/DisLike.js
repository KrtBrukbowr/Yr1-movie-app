import {React, useState} from 'react'
import './DisLike.css'

const DisLikeBtn = () => {

    const [disLikes, setDisLikes] = useState(0)

    return(
    
            <div className="DisLike--BtnBox">
                <button className="DisLike--Btn" onClick={() => setDisLikes(disLikes + 1)}>DisLike|{disLikes}</button>
                <p>{disLikes}</p>
            </div>
        
    )
}
export default DisLikeBtn;