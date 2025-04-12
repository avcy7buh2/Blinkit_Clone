import React, { useState } from "react";
import {useNavigation} from "react-router-dom";
import "../../Styling/imageHolder.css"

const ImageHolder = ({src}) => {
    const [data, setData] = useState(src || []);
    //const navigate = useNavigation();

    const handleClick = (index) => {
        //navigate(`/list/${index}`);
    }

    return (
        <>
            <div className='imageBox'>
                {
                    data.map((url, index) => (
                        <img src={url} className='heroImage flex-item' key={index} onClick={() => handleClick(index)}/>
                    ))
                }
            </div>
        </>
    );
}

export default ImageHolder;