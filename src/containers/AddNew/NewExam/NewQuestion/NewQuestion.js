import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

import './NewQuestion.css'

class NewQuestion extends Component {
    state = {
        show: false
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showInputBoxHandler = () => {
        this.setState({
            show: !this.state.show
        })
    }

    newQuestionHandler = () => {
        this.props.newquestionhandler(this.state.que, this.state.opt1, this.state.opt2, this.state.opt3, this.state.opt4, this.state.answer, this.state.queimage);
        this.showInputBoxHandler();
    }

    render() {
        return (
            <div className="container" id="addnewquestion">
                <Button
                    id="addnewquestionbutton"
                    variant="outline-dark"
                    onClick={this.showInputBoxHandler}>
                    Add New Question
                </Button>

                {this.state.show ?
                    <div className="row">
                        <Form className="shadow p-2 bg-white rounded">
                            <Form.Group>
                                <Form.Control
                                    id="noborder"
                                    as="textarea"
                                    rows="2"
                                    placeholder="Question"
                                    name="que"
                                    onChange={this.inputChangeHandler} />
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Figure</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        type="file"
                                        name="queimage" />
                                </Col>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group>
                                    <Col lg={6}>
                                        <Form.Control
                                            id="noborder"
                                            type="text"
                                            placeholder="Option 1"
                                            name="opt1"
                                            onChange={this.inputChangeHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group >
                                    <Col lg={6}>
                                        <Form.Control
                                            id="noborder"
                                            type="text"
                                            placeholder="Option 2"
                                            name="opt2"
                                            onChange={this.inputChangeHandler} />
                                    </Col>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group >
                                    <Col lg={6}>
                                        <Form.Control
                                            id="noborder"
                                            type="text"
                                            placeholder="Option 3"
                                            name="opt3"
                                            onChange={this.inputChangeHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group >
                                    <Col lg={6}>
                                        <Form.Control
                                            id="noborder"
                                            type="text"
                                            placeholder="Option 4"
                                            name="opt4"
                                            onChange={this.inputChangeHandler} />
                                    </Col>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group >
                                <Col lg={6}>
                                    <Form.Label>Answer</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="answer"
                                        onChange={this.inputChangeHandler}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group>
                                <Button
                                    className="float-right"
                                    variant="outline-dark"
                                    onClick={this.newQuestionHandler}>
                                    Add
                                </Button>
                            </Form.Group>
                        </Form>
                    </div > : null}
            </div>
        )
    }

}

// const mapDispatchToProps = dispatch => {
//     return {
//         newquestionregister: (newque) => dispatch({
//             type: actions.NEWQUESTIONREGISTER, value: { newque }
//         })
//     }
// }

// export default connect(null, mapDispatchToProps)(NewQuestion);
export default NewQuestion;