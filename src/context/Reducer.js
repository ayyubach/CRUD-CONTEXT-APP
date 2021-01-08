export default (state,action) =>{

    switch(action.type){

        case 'ADD_USER': 
        return {
        
        users:[action.payload,...state.users]
        }

        case 'EDIT_USER': 
        const updatedUser = action.payload;
        console.log(updatedUser)
        const updatedUsers = state.users.map(user=>  {

            if(user.id == updatedUser.id){
                return updatedUser;
                
                
            }
            // console.log(`user ${user.name}`, `updated ${updatedUser.name}`)
            return user;
        })

        return{
            users:updatedUsers
        }
        
        
        case 'REMOVE_USER': return{
        users : state.users.filter((u)=> u.id !== action.payload)
        }
        default: return state;

    }
}