// this action gets imported over to reducers/index.js as the updated 
// state of the application
// default state always needs to get set first.
const DEFAULT_STATE = {
    time: new Date().toLocaleTimeString(),
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_TIME': 
            return { ...state, time: new Date().toLocaleTimeString()}
        default:
            return state;
    }
}