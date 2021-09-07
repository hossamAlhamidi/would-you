export const AUTH_USER = "AUTH_USER";
export const LOGOUT = "LOGOUT"
export const ADD_Q = "ADD_Q"
export const DELETE_Q = "DELETE_Q"
export const GETUSERS = "GETUSERS"
export const REC_Q = "REC_Q"
export const SUBMIT_Q = "SUBMIT_Q"


  export const authUser = (user) => {
    return {
      type: AUTH_USER,
      user:user
    };
  };
  
  
  export const logoutUser = () => {
    return {
      type: LOGOUT,
      user:null
    };
}

export const getUsers = (users)=>{
   return{ 
     type:GETUSERS,
     users:users
  }
}

export const receiveQuestions = (questions)=>{
  return{
    type:REC_Q,
    questions:questions
  
  }
}

export const submitQuestions = ()=>{
  return {
    type:SUBMIT_Q
  }
}