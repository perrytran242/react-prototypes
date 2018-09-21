import React from 'react';

export default props => {
    // console.log('Images:', props.about)
    const { src, style } = props.about;
    console.log(src);
    return <img style={style} className="scrapbook-image" src={src} alt=""/>
}