import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Consumer } from '../../context';
import Axios from 'axios';

class Contact extends Component {
    state = {
        showContactInfo: false
    };
    onDeleteClick = async (id, dispatch) => {
        try {
         await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type: 'DELETE_CONTACT', payload: id});  
        } catch (error) {
            dispatch({type: 'DELETE_CONTACT', payload: id});
        }
    }
    render() { 
        const {id, name, email, phone} = this.props.contact;
        const { showContactInfo } = this.state;
        return ( 
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card card-nav mb-3" style={{padding: 12}}>
                            <h4>{name}{' '} 
                                <i style={{cursor: 'pointer'}} className="fa fa-sort-down" aria-hidden="true" 
                                onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})}></i>
                                <Link to={`/contact/edit/${id}`}><i className="fa fa-pencil" style={{cursor: 'pointer',color: 'black', float: 'right', marginRight: '1rem', paddingLeft: '1rem'}}></i></Link>
                                <i style={{color: 'red', cursor: 'pointer', float: 'right'}} className="fa fa-times" aria-hidden="true" onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                            </h4>
                            
                            {showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>) : null}
                            
                        </div>
                    )
                }}
            </Consumer>            
         );
    }
}
 
export default Contact;