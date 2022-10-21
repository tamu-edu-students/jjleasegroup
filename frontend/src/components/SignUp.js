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

    render() {
        const submit_form = () => {
            APIService.sign_up({
                "customer_username": this.state.customer_username,
                "customer_password": this.state.customer_password,
                "customer_email": this.state.customer_email,
                "customer_phone": this.state.customer_phone,
                "customer_gender": this.state.customer_gender,
                "customer_date_of_birth": this.state.customer_date_of_birth})
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

                <label htmlFor="customer gender">select your gender:</label>
                <select name="customer_gender" id="customer_gender" onChange={this.customer_gender_handler}>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                </select>
                <br/><br/>
                <label htmlFor="customer date of birth">Start date:</label>
                <input type="date" id="customer_date_of_birth" name="customer_date_of_birth"
                       value={this.state.customer_date_of_birth}
                       min="1950-01-01" max={this.state.today} onChange={this.customer_date_of_birth_handler}/>

                <br/><br/>
                <button className="btn btn-primary" onClick={submit_form}>Submit</button>

            </div>

        );
    }
}

export default SignUp;