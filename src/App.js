import './App.css';
import Accordion from "./components/Accordion";
import {UseRefExample, UseMemoExample, UseCallbackExample} from "./hooks";

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

        <Accordion title='3. useCallback hook' heading='useCallbackHeading'>
            <UseCallbackExample />
        </Accordion>
        <hr className="text-dark"/>
    </div>
  );
};

export default App;
