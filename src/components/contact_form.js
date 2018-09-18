import React, { Component } from 'react';
import Field from './field';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Handle Submits:', this.state);

        this.props.add(this.state);
        
        this.setState({
            firstName: '',
            lastName: '',
        });
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }
    render() {
        let { firstName, lastName, phone, email } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text" value = {firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value = {lastName} onChange ={this.handleInputChange}/>
                <Field name="phone" label="Phone Number" type="tel" value = {phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange}/>
                <button>Add Contact</button>
            </form>
        )
    }
}

export default ContactForm;