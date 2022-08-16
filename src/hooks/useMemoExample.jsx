import {useState, useEffect, useMemo} from "react";

const useMemoExample = () => {
    const [number, setNumber] = useState(0);
    const [colorChange, setColorChange] = useState(false);

    const doubleNumber = useMemo(() => superSlowFunction(number), [number]);

    //referential equality
    const appStyle = useMemo(() => {
        return {backgroundColor: colorChange ? 'tomato' : 'white'}
    }, [colorChange]);

    useEffect(() => {
        console.log('Background changed 🌈');
    }, [appStyle]);

    return (
        <div style={appStyle} className='mx-auto mt-5 d-grid gap-3 w-50'>
            <h5 className='alert alert-primary text-center'>
                Getting to know useMemo hook
            </h5>
            <input
                type='number'
                className='form-control'
                value={number}
                onChange={event => setNumber(event.target.value)}
                placeholder='Type a number...'
            />
            <button
                type={"button"}
                className='btn btn-info btn-block'
                onClick={() => setColorChange((prevColorChange) => !prevColorChange)}
            >
                Please change the color! 🖌️
            </button>
            <div style={appStyle} className='text-center mx-auto'>
                <p className='alert alert-warning'>{`The doubled number is equal to --> ${doubleNumber}`}</p>
            </div>
        </div>
    )
}

const superSlowFunction = (num) => {
    console.log('Super Slow Function is running 🦥');

    let count = 0;
    //NOTE Delay the return
    while (count <= 1000000000){
        count++;
    }
    return num * 2;
};

export default useMemoExample;