import Contact from './contact';

const ContactList=({ data })=>{

    return(
        <div>
      {
        data.map((user, i) => {
          return (
            <Contact
              key={i}
              id={data[i].id}
              name={data[i].first_name} 
              email={data[i].email}
              img={data[i].avatar}
              />
          );
        })
      }
    </div>
    );
}
export default ContactList;