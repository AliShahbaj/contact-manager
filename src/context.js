import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) =>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => 
                contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
}
export class Provider extends Component {
    state = { 
        contacts: [
            {
                id: 1,
                email: "jdoe@gmail.com",
                phone: "9898989898",
                name: "Jo Doe"
            },
            {
                id: 2,
                email: "ali@anviam.com",
                phone: "989898989",
                name: "Shahabaj Ali"
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}; 

export const Consumer = Context.Consumer;