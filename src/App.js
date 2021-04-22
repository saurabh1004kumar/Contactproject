import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ContactList from './components/contactList';
import Preson from './components/singleContact';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  
  

  return (
    <Router>
      <Route exact path="/" component = {ContactList} />
      <Route exact path="/:id" component = {Preson} />
    </Router>
  );
}

export default App;