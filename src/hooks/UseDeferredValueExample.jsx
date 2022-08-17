import { useState, useMemo, useEffect, useDeferredValue } from "react";

const List = ({ value }) => {
  const deferredValue = useDeferredValue(value);

  const list = useMemo(() => {
    const numbersList = [];
    let count = 0;

    while (count <= 20000) {
      numbersList.push(
        <div key={count}>{`The number is equal to : ${deferredValue} 🏎 `}</div>
      );
      count++;
    }
    return numbersList;
  }, [deferredValue]);

  useEffect(() => {
    console.log(`Value : ${value}`);
    console.log(`DeferredValue : ${deferredValue}`);
  }, [value, deferredValue]);

  return list;
};

const UseDeferredValueExample = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-warning text-center">
        Getting to know useDeferredValue hook
      </h5>

      <input
        type="number"
        value={value}
        className="form-control"
        onChange={(e) => setValue(e.target.value)}
      />
      {value !== 0 ? <List value={value} /> : null}
    </div>
  );
};

export default UseDeferredValueExample;
