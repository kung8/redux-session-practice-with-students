import React from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import {Switch,Route} from 'react-router-dom'

export default (
    <Switch>
        <Route path='/dashboard' component={Dashboard}/>
        <Route exact path='/' component={Login}/>
    </Switch>
)