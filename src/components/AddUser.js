import React,{useState,useContext} from 'react'
import Home from './Home'
import {Form,Input,Label,FormGroup,Button} from 'reactstrap'
import {Link,useHistory} from 'react-router-dom'
import {context} from '../context/ContextGlobal'
import { v4 as uuid } from "uuid";

const AddUser = () => {

    
    const [newUser,setNewUser] = useState({id:uuid(),name:'',email:''});
    const {addUser} = useContext(context);
     const history = useHistory();

    const onChange = (e)=>{
    e.preventDefault();
    setNewUser({...newUser,[e.target.name]:e.target.value});
    }

    const submit = (e)=>{
    e.preventDefault();
    addUser(newUser);
    history.push('/');
    }
    return (
        <div>
            <Home urlLink='/' textLink='Home' />
            <h4 className='text-center m-3'>Add User</h4>
            <Form className='ml-4' onSubmit={submit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type='text' name='name' onChange={onChange} className='form-input' placeholder='Enter your name' required></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type='email' name='email' onChange={onChange} className='form-input' placeholder='Enter your email' required></Input>
                </FormGroup>
                <div>
                    <Button type='submit' color='primary'>Save</Button>
                    <Link to='/' className='btn btn-danger m-1'>Cancel</Link>
                </div>
            </Form>
        </div>
    )
}

export default AddUser
