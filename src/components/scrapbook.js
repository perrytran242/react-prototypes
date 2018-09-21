import React from 'react';
import imageData from './image_data';
import ScrapbookImage from './scrapbook_images';
import './scrapbook.css'

export default props => {
    // console.log('Image Array:', imageData);
    const images = imageData.map( (item, index) => {
        // console.log(item);
        return <ScrapbookImage about={item} key={index}/>
    });
    return (
        <div className="scrapbook-container">
            {images}
        </div>
    )
};