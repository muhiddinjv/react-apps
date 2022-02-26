import React from 'react';
import ImgCard from './ImgCard';
import './ImgList.css';

const ImgList = props => {
    const images = props.images.map(image => <ImgCard key={image.id} image={image}/>)

    return (
        <div className='image-list'>{images}</div>
    )
}

export default ImgList;
