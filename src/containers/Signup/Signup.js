import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actionTypes';

import './Signup.css'

class Signup extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        mobileno: '',
        tutionname: '',
        address: '',
        state: '',
        city: '',
        zip: ''
    }

    newuserHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }




    render() {
        return (

            <div className="container">
                <div className="row" id="signuppage">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    onChange={this.newuserHandler} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="surname">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Surname"
                                    name="surname"
                                    onChange={this.newuserHandler} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Tution's Email"
                                    name="email"
                                    onChange={this.newuserHandler} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="mobileno">
                                <Form.Label>Mobile No.</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Mobile No."
                                    name="mobileno"
                                    onChange={this.newuserHandler} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="tutionname">
                            <Form.Label>Tution Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="xyz coaching classes"
                                name="tutionname"
                                onChange={this.newuserHandler} />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Apartment, studio, or floor"
                                name="address"
                                onChange={this.newuserHandler} />
                        </Form.Group>


                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    as="select"
                                    value="Choose..."
                                    name="state"
                                    onChange={this.newuserHandler}>
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    onChange={this.newuserHandler} />
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Zip Code"
                                    name="zip"
                                    onChange={this.newuserHandler} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={this.newuserHandler} />
                        </Form.Group>


                        <Link to="/login">
                            <Button
                                variant="primary"
                                type="submit"
                                onChange={() => this.props.newuserregister(this.state)}>
                                Create Account
                            </Button>
                        </Link>


                    </Form>
                </div>
            </div >)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newuserregister: (newuser) => dispatch({
            type: actions.NEWUSERREGISTER, value: { newuser }
        })
    }
}



export default connect(null, mapDispatchToProps)(Signup);