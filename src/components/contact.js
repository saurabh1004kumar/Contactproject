import react from 'react';
import { Card, Image } from 'semantic-ui-react'
const Contact=({ name,email,img, })=>{
    return(
        <Card>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src={img}
                />
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                 <strong>{email}</strong>
                </Card.Description>
            </Card.Content>
        </Card>
    );
}
export default Contact;