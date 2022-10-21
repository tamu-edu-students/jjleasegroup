import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

import React, {Component} from 'react';
import APIService from "../APIService";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question_text: '',
            apt_area: '0',
            question_purpose: '0',
        }
    }
    question_text_handler = (event) => {
        this.setState({
            question_text: event.target.value
        })
    }

    apt_area_handler = (event) => {
        this.setState({
            apt_area: event.target.value
        })
    }

    question_purpose_handler = (event) => {
        this.setState({
            question_purpose: event.target.value
        })
    }

    render() {
        const submit_form = () => {
            APIService.add_question_consulation({
                "question_purpose": this.state.question_purpose,
                "apt_area": this.state.apt_area,
                "question_text": this.state.question_text,
                "question_status": "0",
                "submission_date_time": new Date().toISOString().slice(0, 19),
                "customer_id": "2"})
                .then(resp => console.log(resp))
        }
        return (
            <div className="form">
                <label htmlFor="apartment area">where is your interested apartment:</label>
                <select name="apt_area" id="apt_area" value={this.state.apt_area} onChange={this.apt_area_handler}>
                    <option value="0" >College Station</option>
                    <option value="1">Austin</option>
                    <option value="2">Houston</option>
                </select>
                <br/><br/>

                <label htmlFor="question purpose">your question is about:</label>
                <select name="question_purpose" id="question_purpose" value={this.state.question_purpose} onChange={this.question_purpose_handler}>
                    <option value="0" >apartment special offers</option>
                    <option value="1">apartment roommate</option>
                    <option value="2">apartment leasing office</option>
                </select>
                <br/><br/>

                <input type="text" value={this.state.question_text} placeholder="enter your question"
                       className="form-control" onChange={this.question_text_handler}/>

                <button className="btn btn-primary" onClick={submit_form}>Submit</button>

            </div>

        );
    }
}

export default ContactForm;