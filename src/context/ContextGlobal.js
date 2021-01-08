import React ,{createContext,useReducer}from 'react'
import Reducer from './Reducer'

const initialObj = {
    users: [{id:'1',name:'Ayyub',email:'ayyub@email.com'},{id:'2',name:'Alex',email:'alex@email.com'}],
}

export const context = createContext(initialObj);


const ContextGlobal = ({children}) => {

const [state,dispatch] = useReducer(Reducer,initialObj);

const removeUser = (id)=>{
    dispatch({type:'REMOVE_USER',payload:id});
}

const editUser = (user) =>{
dispatch({type:'EDIT_USER',payload:user});
}

const addUser = (user) => {
    dispatch({type:'ADD_USER',payload:user})
}
    return (
    
        <context.Provider value={{users:state.users,removeUser,editUser,addUser}}>
        {children}
        </context.Provider>
    )
}

export default ContextGlobal
