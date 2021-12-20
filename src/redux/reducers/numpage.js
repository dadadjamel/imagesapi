
const initialState = {
    numpage: 1,
}

export default function images(state = initialState, action) {
    switch (action.type) {
        // case 'GET_NUMPAGE':
        //     return {
        //         ...state,
        //         numpage: payload.numpage
        //     }
        case 'INCREMENT_NUMPAGE':
            return {
                ...state,
                numpage: action.payload.numpage + 1
            }
        default:
            return state
    }
}