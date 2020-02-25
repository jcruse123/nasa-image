import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class PhotoSearch extends React.Component {

  state = {
    searchTerms: ''
  }

  formHandler = e => {
    e.preventDefault()
    this.props.searchUpdate(this.state.searchTerms)
  }

  onSearchClick = e => {
    e.preventDefault()
    this.props.searchUpdate(this.state.searchTerms)
  }

  onSearchChange = e => {
    this.setState({
      searchTerms: e.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={this.formHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="" value={this.state.searchTerms} onChange={this.onSearchChange} />
        </Form.Group>
        <Button variant="primary" onClick={this.onSearchClick}>
          Search
        </Button>
      </Form>
    )
  }
}


export default PhotoSearch
