const initialState = {
    id: 0,
    username: ''
}

export const SAVE_USER = 'SAVE_USER'
export const CLEAR_USER = 'CLEAR_USER'

export default function (state = initialState, action) {
    console.log(state,action)
    const { type, payload } = action
    
    switch (type) {
        case SAVE_USER:
            const { id, username } = payload
            console.log(id,username)
            return { ...state, id, username }
        case CLEAR_USER:
            return {...state, id:0,username:''}
        default:
            return { ...state }
    }
}

// export function saveUser(user) {
//     return {
//         type: SAVE_USER,
//         payload: user
//     }
// }