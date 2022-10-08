import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

// class ContactForm extends React.Component {
//   state = {
//     pk: 0,
//     name: "",
//     email: "",
//     document: "",
//     phone: ""
//   };
//
//   componentDidMount() {
//     if (this.props.student) {
//       const { pk, name, document, email, phone } = this.props.student;
//       this.setState({ pk, name, document, email, phone });
//     }
//   }
//
//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//
//   createStudent = e => {
//     e.preventDefault();
//     axios.post(API_URL, this.state).then(() => {
//       this.props.resetState();
//       this.props.toggle();
//     });
//   };
//
//   editStudent = e => {
//     e.preventDefault();
//     axios.put(API_URL + this.state.pk, this.state).then(() => {
//       this.props.resetState();
//       this.props.toggle();
//     });
//   };
//
//   defaultIfEmpty = value => {
//     return value === "" ? "" : value;
//   };
//
//   render() {
//     return (
//       <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
//         <FormGroup>
//           <Label for="name">Name:</Label>
//           <Input
//             type="text"
//             name="name"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.name)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="email">Email:</Label>
//           <Input
//             type="email"
//             name="email"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.email)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="document">Document:</Label>
//           <Input
//             type="text"
//             name="document"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.document)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="phone">Phone:</Label>
//           <Input
//             type="text"
//             name="phone"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.phone)}
//           />
//         </FormGroup>
//         <Button>Send</Button>
//       </Form>
//     );
//   }
// }
//
// export default ContactForm;

import React, {Component} from 'react';
import APIService from "../APIService";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: ''
        }
    }
    questionHandler = (event) => {
        this.setState({
            question: event.target.value
        })
    }

    render() {
        const submit_form = () => {
            APIService.add_question_consulation({"question_purpose": "2",
                "apt_area": "1",
                "question_text": this.state.question,
                "question_status": "0",
                "submission_date_time": "2022-09-09T22:20:30-05:00",
                "customer_id": "2"})
                .then(resp => console.log(resp))
        }
        return (
            <div className="container">
                <input type="text" value={this.state.question} placeholder="enter your question" className="form-control" onChange={this.questionHandler}/>
                <button className="btn btn-primary" onClick={submit_form}>Submit</button>
            </div>
        );
    }
}

export default ContactForm;