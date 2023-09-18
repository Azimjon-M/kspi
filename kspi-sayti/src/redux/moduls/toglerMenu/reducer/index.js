const initialState = {
    isActiveM: false
}

const reducerIsActiveM = (state = initialState, {type}) => {
    switch (type) {
        case "setTrue":
            return {isActiveM:(state.isActiveM = true)}
        case "setFalse":
            return {isActiveM:(state.isActiveM = false)}
        default:
            return {isActiveM:(state.isActiveM = false)}
    }
}

export default reducerIsActiveM;