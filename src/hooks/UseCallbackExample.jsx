import { useState, useEffect, useCallback } from "react";

const List = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log("Updating Items 👷‍♂️");
    }, [getItems]);

    return items.map((item, index) => <div key={index}>{item}</div>);
};

const UseCallbackExample = () => {
    const [number, setNumber] = useState(1);
    const [colorChange, setColorChange] = useState(false);

    //NOTE useCallback() returns memoized callback
    // useMemo() only returns memoized value
    const getItems = useCallback(() => {
        return [number, parseInt(number) + 1, parseInt(number) + 2];
    }, [number]);

    const appStyle = {
        backgroundColor: colorChange ? "tomato" : "white",
    };

    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50" style={appStyle}>
            <h5 className="alert alert-danger text-center">
                Getting to know useCallback hook
            </h5>
            <input
                type="number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Type your number..."
            />
            <button
                type="button"
                className="btn btn-success btn-block"
                onClick={() => setColorChange((prevColorChange) => !prevColorChange)}
            >
                Change the background 🏳️‍🌈
            </button>
            <div style={appStyle} className="text-center mx-auto">
                <List getItems={getItems} />
            </div>
        </div>
    );
};

export default UseCallbackExample;
