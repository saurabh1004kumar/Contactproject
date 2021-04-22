import { Link } from 'react-router-dom';
import Contact from './contact';
import Navigation from './navBar';
import { useState, useEffect } from 'react';

const ContactList=()=>{

  const [ data, setdata ] = useState([]);
  
  const [searchField, setSearchField] = useState('')

    useEffect(() => {
       fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => (setdata(data.data)));
    }, [])

    const onSearchChange = event => {
        setSearchField(event.target.value)
        console.log(event.target.value);
    }

    const filteredContact = data.filter(data => {
        let fullName = data.first_name + ' ' + data.last_name
        return fullName.toLowerCase().includes(searchField.toLowerCase())
    })

    function GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return 1;    
            } else if (a[prop] < b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
    }

    data.sort(GetSortOrder("first_name"));

    return(
        <div>
        <Navigation searchField={onSearchChange}/>
      {
        data.map((user, i) => {
          return (
            <Contact
              key={i}
              id={data[i].id}
              first_name={data[i].first_name} 
              last_name={data[i.last_name]}
              email={data[i].email}
              image={data[i].avatar}
              />
          );
        })
      }
    </div>
    );
}
export default ContactList;