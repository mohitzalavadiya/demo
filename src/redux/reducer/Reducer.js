import * as actionType from '../ActionType';

const init = {
    counter : 0
}

export const countereducer = (state = init, action) => {
    switch(action.type){
        case actionType.INCREMENT :
            return{
                ...state,
                counter : state.counter + 1
            }
            break;
        case actionType.DECREMENT:
            return{
                ...state,
                counter : state.counter - 1
            }  
            break
        default :
        return  state
        
    }
}

export default countereducer;