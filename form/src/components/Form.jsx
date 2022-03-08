import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../components/form.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: false,
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            buisnessName:'',
            error:{
                firstname:'',
                email:'',
                phone:'',
                buisnessName:''

            }
         }
    }
    onclickrenderOne=()=>{
        if(this.state.isShow)
        this.setState({isShow:false});
    }
    onclickrenderTwo=()=>{
        if(!this.state.isShow)
        this.setState({isShow:true});
    }
    nameHandler=(e)=>{
        this.setState({firstname:e.target.value})
        let regex_name=/^[A-Za-z0-9]{5,20}$/;

        if(!regex_name.test(this.state.firstname)){
            this.setState({error:{firstname:'Name must contain 6 characters'}});
        }
        else{
            this.setState({error:{firstname:''}});
        }
    }
    emailHandler=(e)=>{
        this.setState({email:e.target.value})
        let regex_name=/^[a-zA-Z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;

        if(!regex_name.test(this.state.email)){
            this.setState({error:{email:'Invalid email id'}});
        }
        else{
            this.setState({error:{email:''}});
        }
    }
    phoneHandler=(e)=>{
        this.setState({phone:e.target.value})
        if(!this.state.phone.match(/^(\+\d{1,3}[-]?)?\d{9}$/) && !(this.state.phone.match(/0{5,}/))){
            this.setState({error:{phone:'Invalid mobile no'}});
        }
        else{
            this.setState({error:{phone:''}});
        }
    }
    render() { 
        return ( 
            <div className='mainForm'>
            <div className='type'>
                <span onClick={this.onclickrenderOne}>Personal</span>
                <span onClick={this.onclickrenderTwo}>Buisness</span>
            </div>
            {(!this.state.isShow)&& <div className='text'>
                <form className='form'>
                <input type='text' placeholder='First Name' onChange={this.nameHandler}></input>
                <span>{this.state.error.firstname}</span>
                <input type='text' placeholder='Last Name'></input>
                <input type='text' placeholder='Email' onChange={this.emailHandler}></input>
                <span>{this.state.error.email}</span>
                <input type='text' placeholder='Number' onChange={this.phoneHandler}></input>
                <span>{this.state.error.phone}</span>
                <button type='submit'><Link to='/Bank'>Next</Link></button>
                </form>
            </div>}
            {(this.state.isShow)&& <div className='text'>
                <form className='form'>
                <input placeholder='Buisness Name' onChange={this.nameHandler}></input>
                <span>{this.state.error.firstname}</span>
                <input placeholder='Email' onChange={this.emailHandler}></input>
                <span>{this.state.error.email}</span>
                <input placeholder='Number' onChange={this.phoneHandler}></input>
                <span>{this.state.error.phone}</span>
                <button type='submit'><Link to='/Bank'>Next</Link></button>
                </form>
            </div>}
            </div>
         );
    }
}
 
export default Form;