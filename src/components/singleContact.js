import react from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Preson=()=>{
    const [preson, setpreson] = useState({})
    const { id }=useParams();

    const preson_detail=`https://reqres.in/api/users/${id}`;

    useEffect(() => {
        fetch(preson_detail)
          .then(response=> response.json())
          .then(users => {setpreson(users.data)});
          
      },[]);

      console.log(preson);

    return(
        <div class="ui card">
            <div class="image">
                <img src={preson.avatar}/>
            </div>
            <div class="content">
                <a class="header">{preson.first_name} {preson.last_name}</a>
                <div class="description">
                    {preson.email}
                </div>
            </div>
            <div class="extra content">
                 <a>
                    <i class="user icon"></i>
                        Follow
                </a>
            </div>
        </div>
    );
}
export default Preson;