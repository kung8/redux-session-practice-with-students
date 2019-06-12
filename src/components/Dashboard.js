import React, { Component } from 'react'
import store from '../ducks/store'
import { CLEAR_USER,SAVE_USER } from '../ducks/reducer'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        const { id, username } = reduxState
        this.state = {
            id,
            username,
            movies: []
        }
    }

    componentDidMount() {
        // this.current()
        axios.get('/api/getMovies').then(res => {
            this.setState({
                movies: res.data
            })
        })
    }

    // current=()=>{
    //     if(this.state.id === 0){
    //         console.log('hit current')
    //         axios.get('/api/current').then(async res=>{
    //             console.log(1111,res.data)
                
    //             await store.dispatch({
    //                 type:SAVE_USER, 
    //                 payload:res.data
    //             })

    //             let reduxState = store.getState()
    //             const {id,username} = reduxState
    //             this.setState({
    //                 id,
    //                 username
    //             })
    //         })
    //     }
    // }

    logout = () => {
        axios.post('/api/logout')
        store.dispatch({
            type: CLEAR_USER
        })
        this.props.history.push('/')
    }

    render() {
        console.log(1111, this.state.username, this.state.id)
        return (
            <div>
                {(this.state.id === 0 && this.state.username === '') ?
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <h1>You are not authorized!</h1>
                    </div> 
                    :
                    <div style={{display:'flex',flexDirection:'column',background:'blue',width:'100vw',alignItems:'center'}}>
                        <h1>{this.state.username}, you made it to the dash!</h1>
                        <button onClick={this.logout}>Logout</button>
                        <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'center',width:'80vw' }}>
                        {this.state.movies.map(movie => {
                            return (
                                <div key={movie.id} >
                                    <div key={movie.id} style={{display:'flex',flexDirection:'column',background:'orange',border:'solid black 2px', margin:5,height:300,width:250,maxHeight:300,maxWidth:250,alignItems:'center',textAlign:'center'}}>
                                        <h1>{movie.title}</h1>
                                        <h3>{movie.year}</h3>
                                        <img src={movie.image} alt='movie' height='200px' width='200px' />
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                }
            </div>
        )
    }
} 