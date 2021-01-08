import React,{useContext} from 'react'
import {context} from '../context/ContextGlobal'
import {Form,ListGroup,ListGroupItem,ListGroupItemHeading,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
const ListUsers = () => {

    const {users,removeUser} = useContext(context);

    return (
        <div>
            <h4 className='text-center m-3'>ListUsers</h4>
            {
         users.length > 0 ? (
         <>
         {users.map(user => 
            <Form key={user.id}>
                <ListGroup>
                    <ListGroupItem className="d-flex">
                        <div>{user.name}</div>
                        <div className="ml-auto">{user.email}</div>
                        <div className="ml-auto">
                           <Link to={`/edit/${user.id}`} className='btn btn-primary'>Edit</Link>
                           <Button onClick={() => removeUser(user.id)} className='btn btn-danger ml-1'>Delete</Button> 
                        </div>
                        
                    </ListGroupItem>

                </ListGroup>
            </Form>
            )}
         </>) 
         :
          (<><h6 className='text-center m-4'>List Users is empty</h6></>)
            }

        </div>
    )
}

export default ListUsers
