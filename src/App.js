import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React  from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import ContextGlobal from './context/ContextGlobal'

import Home from './components/Home'
import EditUser from './components/EditUser'
import ListUsers from './components/ListUsers'
import AddUser from './components/AddUser'

function App() {
  
  return (
    <div className="App">
      <ContextGlobal>
        
      <Router>
      
      
      <Switch>
        <Route path='/' exact render={(props)=> <><Home urlLink='/adduser' textLink='Add User' /><ListUsers /></>}/>
        <Route path='/edit/:id' exact component={EditUser}/>
        <Route path='/adduser' component={AddUser}/>
      </Switch>
      </Router>
      
      </ContextGlobal>


    </div>
  );
}

export default App;
