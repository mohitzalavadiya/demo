import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/action/Action';

function Counter(props) {
    const dispatch = useDispatch();
    const c = useSelector(state => state.counter);

    const incre = () => {
        dispatch(increment())
    }
    const decre = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <button onClick={incre} className="bg-danger py-4 px-3 m-3 fs-1">+</button>
            {c.counter}
            <button className="bg-danger py-4 px-3 m-3 fs-1" onClick={decre}>-</button>
        </div>
    );
}

export default Counter;