import react from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
function Contact({ id, email, first_name, last_name, image }) {
    return (
        <Card>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src={image}
                />
                <Card.Header
                     as = {Link}
                     to = {{
                         pathname : `/singlecontact/${first_name}`,
                         aboutProps : {
                             id : id, 
                             email : email,
                             first_name : first_name,
                             last_name : last_name,
                             image : image
                         }
                     }}
                >
                    {first_name} {last_name}
                </Card.Header>
                <Card.Description>
                {email}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default Contact