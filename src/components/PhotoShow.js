import React from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class PhotoShow extends React.Component {

  state = {
    id: '',
    date: '',
    title: '',
    description: '',
    photographer: '',
    href: ''
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    axios.get(`https://images-api.nasa.gov/search?nasa_id=${this.props.match.params.id}&media_type=image`)
      .then(response => {
        this.setState({
              id: response.data.collection.items[0].data[0].nasa_id,
              date: response.data.collection.items[0].data[0].date_created,
              title: response.data.collection.items[0].data[0].title,
              description: response.data.collection.items[0].data[0].description,
              photographer: response.data.collection.items[0].data[0].photographer,
              href: response.data.collection.items[0].links[0].href
        })
      })
  }

  render() {
    return (
      <div>
        <Card className="photo-card mt-3 mb-3">
          <Card.Img src={this.state.href} />
          <hr className="card-hr" />
          <Card.Body>
            <Card.Title className="display-4 card-title">{this.state.title}</Card.Title>
            <hr />
            <Card.Text>
              {this.state.description}
            </Card.Text>
            <div className="text-right">
              <Button href={this.state.href} variant="primary">Download Image</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}


export default PhotoShow
