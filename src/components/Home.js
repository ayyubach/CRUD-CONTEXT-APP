import React ,{useContext}from 'react'
import {Navbar} from 'reactstrap'
import {Link} from 'react-router-dom'


const Home = (props) => {
    

    return (
        <div>
        <Navbar color='dark'>
          <span className='logo'>CRUD APP</span>
        <Link to={props.urlLink}  className='btn btn-primary'>{props.textLink}</Link> 
        </Navbar>   
        </div>
    )
}

export default Home
