import React from 'react'
import ImageShow from './ImageShow'

function ImageList({images}) {

  const renderedList= images.map((image)=> <ImageShow image={image} key={image.id}/>)
  return (
    <div>
      {renderedList}
    </div>
  )
}

export default ImageList
