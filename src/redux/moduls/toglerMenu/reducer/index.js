const initialState = {
    isActiveMenu: false
}

const reducerIsActiveM = (state = initialState, {type}) => {
    switch (type) {
        case "setTrue":
            return {isActiveMenu:(state.isActiveMenu = true)}
        case "setFalse":
            return {isActiveMenu:(state.isActiveMenu = false)}
        default:
            return {isActiveMenu:(state.isActiveMenu = false)}
    }
}

export default reducerIsActiveM;