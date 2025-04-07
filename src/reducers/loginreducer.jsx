export const loginreducer=(state,{type,payload})=>{
    switch(type){
        case 'EMAIL':
            return{
                ...state,email:payload.value
            }
            case 'PASSWORD':
                return{
                    ...state,payload:payload.value
                }
            case 'TOKEN':
                return{
                    ...state,token:payload.token
                }
            case 'LOGOUT':
                return{
                    ...state,
                    email:'',password:'',token:''
                }
                default:
    return state;
    }
}