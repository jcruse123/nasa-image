import React from 'react'
import axios from 'axios'
import { BrowserRouter as HashRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import PhotoGrid from './PhotoGrid'
import PhotoShow from './PhotoShow'
import PhotoSearch from './PhotoSearch'
import logo from '../img/nasa-logo.png'


class PhotoDashboard extends React.Component {

  state = {
    photos: [],
    search: ''
  }

  searchUpdate = (searchTerms) => {
    this.setState({
      search: searchTerms.toString()
    })
  }

  componentDidMount() {
    axios.get('https://images-assets.nasa.gov/popular.json')
      .then(response => {
        this.setState({
          photos: response.data.collection.items.map(image => {
            return {
              id: image.data[0].nasa_id,
              date: image.data[0].date_created,
              title: image.data[0].title,
              description: image.data[0].description,
              photographer: image.data[0].photographer,
              href: image.links[0].href
            }
          })
        })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      axios.get(`https://images-api.nasa.gov/search?q=${this.state.search}&media_type=image`)
        .then(response => {
          this.setState({
            photos: response.data.collection.items.map(image => {
              return {
                id: image.data[0].nasa_id,
                date: image.data[0].date_created,
                title: image.data[0].title,
                description: image.data[0].description,
                photographer: image.data[0].photographer,
                href: image.links[0].href
              }
            })

          })
        })
      }
  }

  render() {
    return (
      <div>
      <Jumbotron className="text-center mt-4 mb-4">
        <img src={logo} alt="nasa logo" className="logo" />
        <h1 className="display-4">Image Library</h1>
        <hr />
        <p>
          Search the NASA image library.
          Click any image for more information.
        </p>
      </Jumbotron>
        <HashRouter basename='/nasa-image'>
          <Route
            path='*'
            render={(props) => <PhotoSearch searchUpdate = {this.searchUpdate} {...props} />}
          />
          <Route
            exact
            path='/'
            render={(props) => <PhotoGrid photos={this.state.photos} {...props} />}
          />
          <Route
            path='/photos/:id'
            render={(props) => <PhotoShow {...props} />}
          />
          <Route
            render={(props) => <Redirect to='/' {...props} />}
          />
        </HashRouter>
      </div>
    )
  }
}


export default PhotoDashboard
