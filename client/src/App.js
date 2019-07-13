import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { Route, Link } from 'react-router-dom'
import axios from 'axios';

// components
import Signup from './pages/sign-up';
import LoginForm from './components/login-form';
import Navbar from './components/navbar';
import About from './pages/about';
import Footer from './components/footer';
import LoggedIn from './components/loggedIn';
import HomePage from './pages/homePage';
import TasksPage from './pages/tasksPage';
import VitalsPage from './pages/vitalsPage';
import ShiftPage from './pages/shiftPage';



class App extends Component {
 

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }
  componentDidMount() {
    this.getUser()
  }
  updateUser (userObject) {
    this.setState(userObject)
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
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
           {/* greet user if logged in: */}
        <LoggedIn/>
        {/* Routes to different components */}
          <Route exact path="/" component={HomePage} />
          <Route path="/login" render={() => <LoginForm updateUser={this.updateUser} />} />
          <Route path="/signup" render={() => <Signup/>}/>
          <Route path="/about" component={About}/> 
          <Route path="/tasks" component={TasksPage}/>
          <Route path="/vitals" component={VitalsPage}/>
          <Route path="/shift" component={ShiftPage}/>
        <Footer/>
      </div>
    );
  }
}

export default App;