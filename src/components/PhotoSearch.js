import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
      <Card className="search-card">
        <Card.Body className="pb-0">
          <Form onSubmit={this.formHandler}>
            <Row>
              <Col xs={12} sm={9}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="" value={this.state.searchTerms} onChange={this.onSearchChange} />
                </Form.Group>
              </Col>
              <Col xs={12} sm={3}>
                <Button className="mb-3" block variant="primary" onClick={this.onSearchClick}>
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}


export default PhotoSearch
