import React from 'react'
import ImageShow from './ImageShow'
import './ImageList.css'

function ImageList({images}) {

  const renderedList= images.map((image)=> <ImageShow image={image} key={image.id}/>)
  return (
    <div className='image-list'>
      {renderedList}
    </div>
  )
}

export default ImageList
