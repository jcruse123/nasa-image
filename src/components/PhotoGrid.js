import React from 'react'
import Photo from './Photo'


class PhotoGrid extends React.Component {
  render() {

    const photos = this.props.photos.map((photo, i) => (
      <Photo
        {...this.props}
        key = {photo.id}
        id = {photo.id}
        title = {photo.title}
        description = {photo.description}
        photographer = {photo.photographer}
        href = {photo.href}
      />
    ))

    return (
      <div className="card-columns mt-4 mb-4">
        {photos}
      </div>
    )
  }
}


export default PhotoGrid
