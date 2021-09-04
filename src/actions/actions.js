export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT"
export const ADD_Q = "ADD_Q"
export const DELETE_Q = "DELETE_Q"
export const GETUSERS = "GETUSERS"
export const REC_Q = "REC_Q"

export const loginUser = (user) => {
    return {
      type: LOGIN,
      user:user
    };
  };
  
  export const logoutUser = () => {
    return {
      type: LOGOUT
    };
}

export const getUsers = (users)=>{
   return{ 
     type:GETUSERS,
     users:users
  }
}