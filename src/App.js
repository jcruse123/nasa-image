import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import PhotoDashboard from './components/PhotoDashboard'
import PhotoShow from './components/PhotoShow'

function App() {
  return (
    <Container>
      <Router basename='/'>
        <Route exact path='/' component={PhotoDashboard} />
        <Route path='/photos/:id' component={PhotoShow} />
      </Router>
    </Container>
  );
}


export default App;
