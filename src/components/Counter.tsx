import React, { useReducer } from 'react'


const initialState = {
    count: 0
}

type counter = {
    count: number
}
const Increment = 'helo';
const Reset = 'Reset';
const Decrement = 'Decrement';
const AmountNumber = 'AmountNumber';

type Incrementaction = { type: typeof Increment };
type ResetAction = { type: typeof Reset };
type DecrementAction = { type: typeof Decrement };
type AmountNumberAction = { type: typeof AmountNumber, payload: number };

type alltype = Incrementaction | ResetAction | DecrementAction | AmountNumberAction;
const reducer = (state: counter, action: alltype) => {
    switch (action.type) {
        case Increment:
            return { count: state.count + 1 }
        case Reset:
            return { count: 0 }
        case AmountNumber:
            return { count: state.count + action.payload }
        case Decrement:
            return { count: state.count - 1 }
        default:
            throw new Error();

    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count:{state.count}</h1>
            <button onClick={() => { dispatch({ type: Increment }) }}>increment</button>
            <button onClick={() => { dispatch({ type: Reset }) }}>Reset</button>
            <button onClick={() => { dispatch({ type: AmountNumber, payload: 5 }) }}>AmountNumber</button>
            <button onClick={() => { dispatch({ type: Decrement }) }}>Decrement</button>
        </div>
    )
}

export default Counter