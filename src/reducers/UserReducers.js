const UserReducer = (state = '', action) => {
    let type = action.type
    switch (type) {
        case "changeState":
            return action.payload.newState
        default:
            return state
    }
}

export {UserReducer}