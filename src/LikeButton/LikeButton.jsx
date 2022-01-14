import React, { useState } from 'react';
// import likebutton.css
// import "./styles.css"; 

const LikeButton = () => {
    const [state, setState] = useState(false);

    function likeUnlike() {
        setState(!state);

    }
    
    return ( 
        <button onClick={likeUnlike} className={'toggle--button '+ (state ? 'toggle--Like': 'toggle--Unlike')}>
            {state ? 'Like' :'Unlike'}
        </button>
    );
}

export default LikeButton 