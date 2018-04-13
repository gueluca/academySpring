import React , {Component} from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem, Jumbotron} from 'react-bootstrap';
import Lodash from 'lodash';
import Post from './Posts';
import Comments from './Comments';


class Profiles extends Component {

    constructor() {

        super();
        
        this.state= {
            selectedProfile: {},
        };

    }

    setSelectedProfile = profile => () => {

        this.setState({ setSelectedProfile: profile});
    }

    renderAddress = (address) => {

        return `${address.street}, ${address.zipcode}, ${address.city} `;
    }

    render() {
    
        //Props destruring

        const {profiles} = this.props;
        const selectedProfile = this.state;
        const {
            setSelectedProfile: {
                name,
                email,
                address,
            },
        } = this.state;

        return (

            <Grid>
              <Row>
                <Col md={6}>
                
                  
                </Col>
                <Col md={6}>
                    <ListGroup>
                        {profiles.map((profile) => (
                            <ListGroupItem
                            key={profile.id}
                            onClick={() => this.setSelectedProfile(profile)}

                            >
            
                                <b>{profiles.name}</b>
                                <p>{profiles.email}</p>
                                <p>{this.renderAddress(address)} </p>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>
                <Col>
                    { !Lodash.isEmpty(selectedProfile) ?
                        <Jumbotron>
                            <h1> {name} </h1>
                            <p> {email} </p>
                            <p> {address} </p>
                        </Jumbotron>
                    : null}
                </Col>
              </Row>
            </Grid>

        );
    }
}