import { useReducer } from "react";

/*
 * NOTE
 * -- useReducer
 * 1- reducer -> functions -> handle state
 * 2- action -> Object -> dispatch to reducer (type, payload)
 * 3- store -> stores state
 */

const ACTIONS= {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {count: state.count + action.preload}
        case ACTIONS.DECREMENT:
            return {count: state.count - action.preload}
        default:
            return state
    };
};

const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    const increment = () => {
        dispatch({type: ACTIONS.INCREMENT, preload: 1})
    };

    const decrement = () => {
        dispatch({type: ACTIONS.DECREMENT, preload: 1});
    };

    return (
        <div className='mx-auto mt-5 d-grid gap-3 w-50'>
            <h5 className="alert alert-danger text-center">
                Getting to know useReducer hook
            </h5>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Increment 😉
            </button>
            <p className="alert alert-warning text-center">
                Your count is equal to:{" "}
                <span className="badge rounded-pill bg-success">{state.count}</span>
            </p>
            <button
                className="btn btn-danger"
                onClick={decrement}>
                Decrement  🤠
            </button>
        </div>
    );
};

export default UseReducerExample;