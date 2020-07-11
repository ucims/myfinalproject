const pesan_ = (state = [], action) => {
    switch(action.type) {
        case 'ADD PESAN' :
        return [
            ...state,
            action.pesan
        ]
        default :
            return state;
    }
}

export default pesan_;