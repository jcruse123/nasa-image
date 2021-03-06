import React from 'react'
import Card from 'react-bootstrap/Card'


class Photo extends React.Component {

  onPhotoClick = e => {
    this.props.history.push(`/photos/${this.props.id}`)
  }

  render() {
    return (
        <Card onClick={this.onPhotoClick} className="photo-card mb-4">
          <Card.Img src={this.props.href} />
        </Card>
    )
  }
}


export default Photo
