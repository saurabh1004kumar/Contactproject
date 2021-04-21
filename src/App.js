import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ContactList from './components/contactList';
import Preson from './components/singleContact';
import Navigation from './components/navBar';
import { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';



function App() {
  const [ Contact, setContact ] = useState([]);
  const [sort, setsort] = useState([]);
  useEffect(() => {
    fetch('https://reqres.in/api/users?')
      .then(response=> response.json())
      .then(users => {setContact(users.data)});
      
  },[]);

  console.log(Contact)
  

  return (
    <div className="App">
    <div className='navBar'>
      <Navigation />
    </div>
      <div className='contact'>
        <ContactList data={Contact}/>
      </div>
      <div className='preson'>
        <Route path="/singleContact/:id">
          <Preson />
        </Route>
      </div>
    </div>
  );
}

export default App;