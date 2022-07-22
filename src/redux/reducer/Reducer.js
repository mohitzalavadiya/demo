import * as Actiontype from '../ActionType'

const init = {
    counter : 0
}

export const Countereducer = (state= init, action) => {
    switch(action.type){
        case Actiontype.INCREMENT :
            return{
                ...state,
                counter : state.counter + 1
            }
            break;
        case Actiontype.DECREMENT :
            return{
                ...state,
                counter : state.counter - 1
            }
            break;
        default:
            return state;
    }
}
export default Countereducer;