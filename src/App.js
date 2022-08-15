import './App.css';
import UseRefExample from "./hooks/UseRefExample";

const App = () => {
  return (
    <div className="container">
      <div className="text-center text-bg-light py-5 border-bottom border-danger">
        <h3>🚀 Learning and using React hooks</h3>
          {/*<hr className="text-danger"/>*/}
      </div>
        <UseRefExample />
    </div>
  );
};

export default App;
