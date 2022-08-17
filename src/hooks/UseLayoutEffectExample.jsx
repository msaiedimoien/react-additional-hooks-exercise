import {useState, useEffect, useLayoutEffect} from "react";

/*
 * NOTE:
 * -- Steps before "useEffect" function runs
 * 1- User take action -> clicking some button
 * 2- React changes the state
 * 3- React handles DOM mutation
 * 4- Browser prints DOM changes to browser screen
 * 5- After browser prints DOM changes to screen then useEffects fires
 *
 * Important: (in useLayoutEffect)
 * 4- useLayoutEffects fires before browser prints DOM changes to browser screen
 */

const UseLayoutEffectExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`First useEffect(🚀) : ${count}`);
    }, [count]);

    useEffect(() => {
        console.log(`Second useEffect(🚀) : ${count}`);
    }, [count]);

    useLayoutEffect(() => {
        console.log(`useLayoutEffect () : ${count}`);
    }, [count]);

    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50">
            <h5 className="alert alert-dark text-center">
                Getting to know useLayoutEffect hook
            </h5>
            <button
                className="btn btn-success"
                onClick={() => setCount((prevCount) => prevCount + 1)}
            >
                Just Add 😊
            </button>
            <p className="alert alert-light text-center">
                Your count is equal to :{" "}
                <span className="badge rounded-pill bg-info">{count}</span>
            </p>
        </div>
    );
};

export default UseLayoutEffectExample;