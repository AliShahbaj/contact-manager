import React, { Component } from 'react';
import { Consumer } from '../../context';

class Contact extends Component {
    state = {
        showContactInfo: false
    };
    onDeleteClick = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id})
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