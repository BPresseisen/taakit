import React, { Component } from 'react'
import axios from 'axios'

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
            <div className="container">
                <div className="row">
                    <div className="col s12 l6 offset-l3 center">
                    {this.state.loggedIn &&
                        <h3>You are logged in as {this.state.username}!</h3>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default LoggedIn