import React, { Component } from 'react'
import currency from '../currency.json';
import {Link} from 'react-router-dom';
import '../components/bank.css'


class Bank extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currencys: [...currency],
            type:''
         }
    }
    dropDown = ()=>{
        let data = this.state.currencys.map((item)=>(
            <option value={item.country}>{item.country}</option>
        ));
        return data;
    }
    valueType=(e)=>{
       this.setState({type:e.target.value}); 
    }
    renderType =()=>{
        for(var i=0;i<this.state.currencys.length;i++){
            if(this.state.currencys[i].country === this.state.type){
                return this.state.currencys[i].currency;
            }
        }
    }
    render() { 
        return ( 
            <div className='bank'>
                <div className='bank2'>
                <div className='currency'>Country:</div>
            <select onClick={this.valueType}>
                {this.dropDown()}
            </select>
            <div className='currency'>Currency:</div>
            <div className='render'>{this.renderType()}</div>
            {(this.state.type === 'India') && <div className='india'>
                <div className='currency'>Bank Detail Format</div>
                <div>India Local</div>
                <div className='currency'>IFSC Code</div>
                <input type="text"></input>
                <div className='currency'>Account Number</div>
                <input type="text"></input>
                <button><Link to='/'>Previous</Link></button>
                <button><Link to='/Address'>Next</Link></button>
                </div>}
                    
                {(this.state.type !== 'India') && 
                    <div className='india'>
                        <div className='currency'>Bank Detail Format</div>
                        <input type="radio" name='one'/>Local Bank Details
                        <input type="radio"name='one'/>Swift Code
                        <div className='currency'>ACH Routing Number</div>
                        <input type="text"></input>
                        <div className='currency'>Account Number</div>
                        <input type="text"></input>
                        <button><Link to='/'>Previous</Link></button>
                        <button><Link to='/Address'>Next</Link></button>
                    </div>}
                    </div>
            </div>
         );
    }
}
 
export default Bank;