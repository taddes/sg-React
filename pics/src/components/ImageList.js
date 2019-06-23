import React from 'react';
import './ImageList.css'

const ImageList = (props) => {
  console.log(props.images)
  const images = props.images.map(image => {
    return <img src={image.urls.regular} key={image.id} alt={image.description}/>
  })
  
  return(
    <div className="image-list">{images}</div>
  )
}

export default ImageList