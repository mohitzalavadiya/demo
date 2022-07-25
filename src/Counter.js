import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './redux/action/Action';


function Counter(props) {

    const dispatch = useDispatch();
    const d = useSelector(state => state.counter)

    const incre = () => {
        dispatch(increment())
    }
    const decre = () => {
        dispatch(decrement())
    }
 
    return (

        
        <div>
            <button onClick={incre()}>+</button>
            {d.counter}
            <button onClick={decre()}>-</button>
        </div>
    );
}

export default Counter;