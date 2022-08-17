import './App.css';
import Accordion from "./components/Accordion";
import {
    UseRefExample, UseMemoExample, UseCallbackExample,
    UseReducerExample, UseLayoutEffectExample,
    UseImperativeHandleExample, UseDeferredValueExample,
    UseTransitionExample, CustomHooks
} from "./hooks";

const App = () => {
  return (
    <div className="container">
      <div className="text-center text-bg-light py-5 border-bottom border-danger">
        <h3>🚀 Learning and using React Additional hooks</h3>
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

        <Accordion title='4. useReducer hook' heading='useReducerHeading'>
            <UseReducerExample />
        </Accordion>
        <hr className="text-info"/>

        <Accordion title='5. useLayoutEffect hook' heading='useLayoutEffectHeading'>
            <UseLayoutEffectExample />
        </Accordion>
        <hr className="text-primary"/>

        <Accordion title='6. useImperativeHandle hook' heading='useImperativeHandleHeading'>
            <UseImperativeHandleExample />
        </Accordion>
        <hr className="text-success"/>

        <Accordion title='7. useDeferredValue hook' heading='useDeferredValueHeading'>
            <UseDeferredValueExample />
        </Accordion>
        <hr className="text-warning"/>

        <Accordion title='8. useTransition hook' heading='useTransitionHeading'>
            <UseTransitionExample />
        </Accordion>
        <hr className="text-info"/>

        <Accordion title='9. Custom hook' heading='CustomHooksHeading'>
            <CustomHooks />
        </Accordion>
        <hr className="text-info"/>
    </div>
  );
};

export default App;
