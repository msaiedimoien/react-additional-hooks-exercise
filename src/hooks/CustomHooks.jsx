import { useState } from "react";

import { useFetch } from "../customHooks/useFetch";
import { useUpdateLogger } from "../customHooks/useUpdateLogger";

const CustomHooks = () => {
  const [showUsers, setShowUsers] = useState(false);

  const [users] = useFetch("https://jsonplaceholder.ir/users");

  useUpdateLogger(showUsers);

  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-danger text-center">
          Getting to know Custom hook
      </h5>

      <hr className="bg-dark" />
      <button
        className="btn btn-block btn-success"
        onClick={() => setShowUsers((prevShowUsers) => !prevShowUsers)}
      >
        Show users 😇
      </button>

      {showUsers
        ? users.map((user, index) => (
            <div key={index}>
              <p className="alert alert-light">{`Name : ${user.name}`}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default CustomHooks;
