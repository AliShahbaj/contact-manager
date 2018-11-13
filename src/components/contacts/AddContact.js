import React, { Component } from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    };
    onSubmit = (dispatch, e) =>{
        e.preventDefault();
        const {name, email, phone} = this.state;
        if(name === ''){
            this.setState({errors: {name: "Name is required!"}})
            return
        }
        if(email === ''){
            this.setState({errors: {email: "Email is required!"}})
            return
        }
        if(phone === ''){
            this.setState({errors: {phone: "Phone is required!"}})
            return
        }
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };
        dispatch({type: 'ADD_CONTACT', payload: newContact});
        
        //After Submit
        this.setState({
          name: '',
          email: '',
          phone: '',
          errors: {}  
        });
    }
    render() {
        const {name, email, phone, errors} = this.state;
        return ( 
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>        
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup 
                                        lable="Name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        placeholder="Enter Name ..."
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup 
                                        lable="Email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        placeholder="Enter Email ..."
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup 
                                        lable="Phone"
                                        name="phone"
                                        type="text"
                                        value={phone}
                                        placeholder="Enter Phone ..."
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input 
                                    type="submit" 
                                    value="Add Contact" 
                                    className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default AddContact;