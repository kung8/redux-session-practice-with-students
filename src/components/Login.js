import React, {Component} from 'react'
import axios from 'axios'
import store from '../ducks/store'
import {SAVE_USER} from '../ducks/reducer'

export default class Login extends Component {
    constructor(){
        super()    
        this.state={
            username:'',
            password:''
        }
    }

    handleLogin=()=>{
        const {username,password} = this.state
        if(username !== '' && password !== ''){
            axios.post('/api/login',{username,password}).then(res=>{
                store.dispatch({
                    type:SAVE_USER, 
                    payload:res.data
                })
                this.props.history.push('/dashboard')
            }).catch(err=>{
                alert('Please use a valid username and password')
                this.setState({
                    username:'',
                    password:''
                })
            })
        }
    }

    render(){
        return(
            <div>
                <input 
                    type="text" 
                    onChange={e=>this.setState({username:e.target.value})} 
                    value={this.state.username}
                    placeholder='username'/>
                <input 
                    type="password" 
                    onChange={e=>this.setState({password:e.target.value})} 
                    value={this.state.password}
                    placeholder='password'/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
} 