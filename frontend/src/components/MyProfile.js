import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

import React, {Component} from 'react';
import APIService from "../APIService";

class MyProfile extends Component {
    constructor(props) {
        super(props);

        window.sessionStorage.setItem("customer_id", "17")

        this.state = {
            customer_id: parseInt(window.sessionStorage.getItem("customer_id")),
            customer_username: '',
            customer_password: '',
            customer_password_1: '',
            customer_password_2: '',
            customer_email: '',
            customer_phone: '',
            customer_gender: 'f',
            customer_date_of_birth: '',
            customer_security_question: '0',
            customer_security_answer: ''
        }
    }

    get_customer_info(customer){
        // console.log(customer)
        this.setState({
                customer_username: customer.customer_username,
                // customer_password: customer.customer_password,
                customer_email: customer.customer_email,
                customer_phone: customer.customer_phone,
                customer_gender: customer.customer_gender,
                customer_date_of_birth: customer.customer_date_of_birth,
                customer_security_question: customer.customer_security_question,
                customer_security_answer: customer.customer_security_answer
            },
            () => console.log(this.state.customer_username));
    }

    // update_customer_info(customer){
    //     console.log(customer)
    //     this.setState({
    //             customer_username: customer.customer_username,
    //             // customer_password: customer.customer_password,
    //             customer_email: customer.customer_email,
    //             customer_phone: customer.customer_phone,
    //             customer_gender: customer.customer_gender,
    //             customer_date_of_birth: customer.customer_date_of_birth,
    //             customer_security_question: customer.customer_security_question,
    //             customer_security_answer: customer.customer_security_answer
    //         },
    //         () => console.log(this.state.customer_username));
    // }

    componentDidMount() {
        APIService.get_account_info(this.state.customer_id)
            .then(resp => this.get_customer_info(resp))
    }

    customer_username_handler = (event) => {
        this.setState({
            customer_username: event.target.value
        })
    }

    customer_password_handler = (event) => {
        this.setState({
            customer_password: event.target.value
        })
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

            APIService.update_account_info(
                // this.state.customer_id,
                {
                    "customer_id": this.state.customer_id,
                    "customer_username": this.state.customer_username,
                    // "customer_password": this.state.customer_password,
                    "customer_email": this.state.customer_email,
                    "customer_phone": this.state.customer_phone,
                    "customer_gender": this.state.customer_gender,
                    "customer_date_of_birth": this.state.customer_date_of_birth,
                    "customer_security_question": this.state.customer_security_question,
                    "customer_security_answer": this.state.customer_security_answer
            }
                )
                // .then(resp => console.log(resp))
                .then(resp => this.get_customer_info(resp))
        }
        return (
            <div className="form">
                <label htmlFor="customer_username">your username</label>
                <input type="text" id="customer_username" value={this.state.customer_username} placeholder="enter your new username"
                           className="form-control" onChange={this.customer_username_handler}/>

                <label htmlFor="your password">your password</label> <br/>
                <button className="btn btn-primary">Change My Password</button> <br/><br/>
                {/*<input type="text" value={this.state.customer_password} placeholder="enter your new password"*/}
                {/*       className="form-control" onChange={this.customer_password_handler}/>*/}

                <label htmlFor="your email">your email</label>
                <input type="text" value={this.state.customer_email} placeholder="enter your new email"
                       className="form-control" onChange={this.customer_email_handler}/>

                <label htmlFor="your phone">your phone</label>
                <input type="text" value={this.state.customer_phone} placeholder="enter your new phone"
                       className="form-control" onChange={this.customer_phone_handler}/>

                <label htmlFor="your gender">your gender:</label> <br/>
                <select name="customer_gender" id="customer_gender" onChange={this.customer_gender_handler}>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                </select>
                <br/><br/>

                <label htmlFor="your date of birth">your date of birth:</label> <br/>
                <input type="date" id="customer_date_of_birth" name="customer_date_of_birth"
                       value={this.state.customer_date_of_birth}
                       min="1950-01-01" max={this.state.today} onChange={this.customer_date_of_birth_handler}/>
                <br/><br/>

                <label htmlFor="your security question">your security question:</label> <br/>
                <select name="security_question" id="security_question" value={this.state.customer_security_question}
                        onChange={this.customer_security_question_handler}>
                    <option value="0" >What is your mother's last name?</option>
                    <option value="1">Which city were you born in?</option>
                    <option value="2">What is your favorite movie?</option>
                </select>
                <br/><br/>

                <label htmlFor="your security question answer">your security question answer:</label>
                <input type="text" value={this.state.customer_security_answer} placeholder="enter your answer"
                       className="form-control" onChange={this.customer_security_answer_handler}/>
                <br/><br/>

                <button className="btn btn-primary" onClick={submit_form}>Update My Profile</button>

            </div>

        );
    }
}

export default MyProfile;