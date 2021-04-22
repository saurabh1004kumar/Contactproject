import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ContactList from './components/contactList';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SingleContact from './components/singleContact';



function App() {
  
  

  return (
    <Router>
      <Route exact path="/" component = {ContactList} />
      <Route exact path="/:id" component = {SingleContact} />
    </Router>
  );
}

export default App;