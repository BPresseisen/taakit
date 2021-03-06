import React, { Component, Fragment  } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import "materialize-css/dist/css/materialize.min.css";

// components
import Signup from './pages/signupPage';
import LoginForm from './pages/loginPage';
import Navbar from './layout/navbar';
import Contact from './pages/contactPage';
import DashboardPage from './pages/dashboardPage';
import TasksPage from './pages/tasksPage';
import ShiftPage from './pages/shiftPage';
import { Footer } from './components/Footer';
import ClientPage from './pages/clientPage';
import CreateClient from './pages/createClientPage';
import Error from './pages/errorPage';

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
    this.M = window.M;
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
      <Fragment>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
         <main>
          <Switch>
          <Route exact path="/" component={LoginForm} updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Route exact path="/dashboard" component={DashboardPage} />
          {/* <Route path="/login" render={() => <LoginForm updateUser={this.updateUser} />} /> */}
          <Route path="/signup" render={() => <Signup/>}/>
          <Route path="/contact" component={Contact}/> 
          <Route path="/tasks" component={TasksPage}/>
          <Route path="/shift" component={ShiftPage}/>
          <Route path="/createclient" component={CreateClient}/>
          <Route path="/client" component={ClientPage}/>
          <Route component={Error}/>
          </Switch>
          </main>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;