import {useRef, useEffect, useState} from "react";

/* NOTE:
useRef is very similar to State, with the difference that
when you change the value of the useRef.current,
it is not re-rendered */

const UseRefExample = () => {
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current += 1;
    })

    useEffect(() =>{
        console.log(inputRef);
        console.log(inputRef.current);

        //code example after render:
        // inputRef.current.placeholder = 'hey touch me...';
        // inputRef.current.className = 'bg-danger';
    }, [])

    const focusInput = () => {
        inputRef.current.focus();
    }

    return(
        <>
            <div className='w-50 d-grid gap-2 mx-auto mt-4'>
                <h5 className='alert alert-success text-center'>
                    Getting to know useRef hook
                </h5>
                <p>Your name is <span className='h5 text-primary'>{name}</span></p>
                <p>The amount of renderings done so far is <span className='h5 text-danger'>{renderCount.current}</span></p>
                <input
                    ref={inputRef}
                    type='text'
                    value={name}
                    onChange={event => setName(event.target.value)}
                    className='form-control'
                    placeholder='Type your name....'
                />
                <button onClick={focusInput} className='btn btn-primary btn-block mt-2'>
                    Focus on textbox 👀
                </button>
            </div>
        </>
    );
};

export default UseRefExample;