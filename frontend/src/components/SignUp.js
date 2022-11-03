import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

import React, {Component} from 'react';
import APIService from "../APIService";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customer_username: '',
            customer_password: '',
            customer_password_1: '',
            customer_password_2: '',
            customer_email: '',
            customer_phone: '',
            customer_gender: 'f',
            customer_date_of_birth: new Date().toISOString().slice(0, 10),
            today: new Date().toISOString().slice(0, 10),
            customer_security_question: '0',
            customer_security_answer: ''
        }
    }
    customer_username_handler = (event) => {
        this.setState({
            customer_username: event.target.value
        })
    }

    customer_password_1_handler = (event) => {
        this.setState({
            customer_password_1: event.target.value
        })
    }

    customer_password_2_handler = (event) => {
        this.setState({
            customer_password_2: event.target.value
        })
        if (this.state.customer_password_1 === this.state.customer_password_2) {
            this.setState({
            customer_password: this.state.customer_password_1
        })
        }
    }

    customer_email_handler = (event) => {
        this.setState({
            customer_email: event.target.value
        })
    }

    customer_phone_handler = (event) => {
        this.setState({
            customer_phone: event.target.value
        })
    }

    customer_gender_handler = (event) => {
        this.setState({
            customer_gender: event.target.value
        })
    }

    customer_date_of_birth_handler = (event) => {
        this.setState({
            customer_date_of_birth: event.target.value
        })
    }

    customer_security_question_handler = (event) => {
        this.setState({
            customer_security_question: event.target.value
        })
    }

    customer_security_answer_handler = (event) => {
        this.setState({
            customer_security_answer: event.target.value
        })
    }

    render() {
        const submit_form = () => {
            APIService.sign_up({
                "customer_username": this.state.customer_username,
                "customer_password": this.state.customer_password,
                "customer_email": this.state.customer_email,
                "customer_phone": this.state.customer_phone,
                "customer_gender": this.state.customer_gender,
                "customer_date_of_birth": this.state.customer_date_of_birth,
                "customer_security_question": this.state.customer_security_question,
                "customer_security_answer": this.state.customer_security_answer
            })
                .then(resp => console.log(resp))
        }
        return (
            <div className="form">
                <input type="text" value={this.state.customer_username} placeholder="enter your username"
                           className="form-control" onChange={this.customer_username_handler}/>
                <input type="text" value={this.state.customer_password_1} placeholder="enter your password"
                       className="form-control" onChange={this.customer_password_1_handler}/>
                <input type="text" value={this.state.customer_password_2} placeholder="repeat your password"
                       className="form-control" onChange={this.customer_password_2_handler}/>
                <input type="text" value={this.state.customer_email} placeholder="enter your email"
                       className="form-control" onChange={this.customer_email_handler}/>
                <input type="text" value={this.state.customer_phone} placeholder="enter your phone"
                       className="form-control" onChange={this.customer_phone_handler}/>

                <label htmlFor="customer gender">select your gender:</label> <br/>
                <select name="customer_gender" id="customer_gender" onChange={this.customer_gender_handler}>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                </select>
                <br/><br/>

                <label htmlFor="customer date of birth">your date of birth:</label> <br/>
                <input type="date" id="customer_date_of_birth" name="customer_date_of_birth"
                       value={this.state.customer_date_of_birth}
                       min="1950-01-01" max={this.state.today} onChange={this.customer_date_of_birth_handler}/>
                <br/><br/>

                <label htmlFor="security question">select your security question:</label> <br/>
                <select name="security_question" id="security_question" value={this.state.customer_security_question}
                        onChange={this.customer_security_question_handler}>
                    <option value="0" >What is your mother's last name?</option>
                    <option value="1">Which city were you born in?</option>
                    <option value="2">What is your favorite movie?</option>
                </select>
                <br/><br/>

                <input type="text" value={this.state.customer_security_answer} placeholder="enter your answer"
                       className="form-control" onChange={this.customer_security_answer_handler}/>
                <br/><br/>

                <button className="btn btn-primary" onClick={submit_form}>Submit</button>

            </div>

        );
    }
}

export default SignUp;