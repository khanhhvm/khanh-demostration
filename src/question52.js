import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'

class Test extends React.Component {

    state = {
        loading: true,
        person: null

    }

    async componentDidMount() {

        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false })
        console.log(data.results[0]);

    }


    render() {
        return (
        <div>
            {this.state.loading || !this.state.person ?
            (<div> loading... </div>) :
                (
                <Card style={{ width: '18rem' }}>
                    <Card.Body className="text-center">
                        <Image thumbnail roundedCircle src={this.state.person.picture.medium} />
                        <Card.Title>{this.state.person.name.first}, {this.state.person.name.last}</Card.Title>
                        <Card.Text>
                         {this.state.person.email}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Address: {this.state.person.location.street.number}, {this.state.person.location.street.name}</ListGroup.Item>
                        <ListGroup.Item>City: {this.state.person.location.city}, {this.state.person.location.state}</ListGroup.Item>
                    </ListGroup>
                </Card>

                )
            }
        </div>);
    }
}

export default Test;