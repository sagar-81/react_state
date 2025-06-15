import React, { useState } from 'react'

const LikeButton = () => {

    const [isLike, setIsLike] = useState(false);

    function toggleLike() {
        setIsLike(!isLike);
    }
    return (
        <div style={{ padding: '10px', cursor: 'pointer', }}>
            <i class="fa fa-heart" onClick={toggleLike} style={{ color: isLike ? 'red' : 'black', }}></i>
        </div>
    )
}

export default LikeButton