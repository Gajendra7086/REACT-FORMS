import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../components/address.css'
class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    submitButton=()=>{
        alert('Submitted Successfully');
    }
    render() { 
        return ( 
            <div className='container'>
                <form onSubmit={this.submitButton} className='address'>
                    <label>Country</label>
                    <input type='text'></input>
                    <label>City</label>
                    <input type='text'></input>
                    <label>Post Code</label>
                    <input type='text'></input>
                    <label>Address</label>
                    <input type="text"/>
                    <button><Link to='/Bank'>Previous</Link></button>
                    <button type='submit'><Link to='/'>Submit</Link></button>
                </form>
            </div>
         );
    }
}
 
export default Address;
