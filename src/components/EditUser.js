import React,{useContext,useState,useEffect} from 'react'
import Home from './Home'
import {Form ,FormGroup, Input , Label,Button} from 'reactstrap'
import {Link,useHistory} from 'react-router-dom'
import {context} from '../context/ContextGlobal'


const EditUser = (props) => {

    const {users,editUser} = useContext(context);
    const [selectedUser,setSelectedUser] = useState({id:'',name:'',email:''});
    const userId = props.match.params.id;

    const history = useHistory();

    const onChange = (e)=>{
    e.preventDefault();
    setSelectedUser({...selectedUser,[e.target.name]:e.target.value});
    }
    
    const submit = (e)=>{
        e.preventDefault();
        editUser(selectedUser);
        history.push("/")
    }


    useEffect(() => {
        
    const userselected = users.find(user => user.id === userId);
    setSelectedUser(userselected);
    }, [users,userId])

    
    return (
        <div>
            <Home urlLink='/' textLink='Home' />
            <h4 className='text-center m-3'>Edit User</h4>
            <Form className='ml-4' onSubmit={submit}>
                <FormGroup > 
                    <Label>Name</Label>
                    <Input value={selectedUser.name} className='form-input' name='name' type='name' onChange={onChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input value={selectedUser.email} name='email' className='form-input' type='email' onChange={onChange}></Input>
                </FormGroup>
              <div>
                  <Button color='primary' type='submit'>Save</Button>
                  <Link to='/' className='btn btn-danger m-1'>Cancel</Link>
              </div>
            </Form>

        </div>
    )
}

export default EditUser
