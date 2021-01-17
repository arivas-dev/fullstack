// import { SET_TOKEN } from '../actions/userAction'


// const initState = !!localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : {
//     token: ''
// }


// export const UserReducer = (state = initState, action) => {
//     switch (action.type) {
//         case SET_TOKEN:
//             localStorage.setItem('token',JSON.stringify({...state,token: action.payload}))
//             return { ...state,token: action.payload }
//         default:
//             return state
//     }
// }