import react from 'react';



const Preson=({ avatar,first_name,last_name,email })=>{

    return(
        <div class="ui card">
            <div class="image">
                <img src={avatar}/>
            </div>
            <div class="content">
                <a class="header">{first_name} {last_name}</a>
                <div class="description">
                    {email}
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