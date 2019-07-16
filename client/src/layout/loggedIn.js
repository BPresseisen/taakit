import React, { Component, Fragment } from 'react';
import { Slim } from '../components/Grid';
import axios from 'axios';

class LoggedIn extends Component {
    constructor() {
        super()
        this.state = {
          loggedIn: false,
          username: null
        }
    
        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
      }
    
      componentDidMount() {
        this.getUser()
      }
    
     
    
      getUser() {
        axios.get('/user/').then(response => {
          console.log('Get user response: ')
          console.log(response.data)
          if (response.data.user) {
            console.log('Get User: There is a user saved in the server session: ')
    
            this.setState({
              loggedIn: true,
              username: response.data.user.username
            })
          } else {
            console.log('Get user: no user');
            this.setState({
              loggedIn: false,
              username: null
            })
          }
        })
      }

    render() {
        return (
         <Fragment>
           <Slim>
           {this.state.loggedIn &&
            <p className="nav-text">{this.state.username}<i className="left material-icons">verified_user</i></p>
            }
           </Slim>
          </Fragment>
        )
    }
}
export default LoggedIn;