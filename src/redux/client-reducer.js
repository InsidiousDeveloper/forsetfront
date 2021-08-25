export default function(state, action) {
    switch (action.type) {
        case 'client':
            return {
                ...state,
                client: action.payload
            }
        case 'modalBox':
            return {
                ...state,
                modalBox: action.payload
            }
        default:
            throw new Error('Something went wrong')
    }
}