import './App.css';
import UseRefExample from "./hooks/UseRefExample";
import UseMemoExample from "./hooks/useMemoExample";
import Accordion from "./components/Accordion";
const App = () => {
  return (
    <div className="container">
      <div className="text-center text-bg-light py-5 border-bottom border-danger">
        <h3>🚀 Learning and using React hooks</h3>
      </div>
        <hr className="text-danger"/>

        <Accordion title='1. useRef hook' heading='useRefHeading'>
            <UseRefExample />
        </Accordion>
        <hr className="text-primary"/>

        <Accordion title='2. useMemo hook' heading='useMemoHeading'>
            <UseMemoExample />
        </Accordion>
        <hr className="text-success"/>

    </div>
  );
};

export default App;
