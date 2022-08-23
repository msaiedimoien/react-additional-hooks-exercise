## 🚀 Learning and using React Additional hooks

### 1. useRef hook
When to Use Refs

1. Managing focus, text selection, or media playback.
2. Triggering imperative animations.
3. Integrating with third-party DOM libraries.\
   `Avoid using refs for anything that can be done declaratively.`

NOTE:\
`useRef` is very similar to `State`, with the difference that
when you change the value of the useRef.current,
it is not re-rendered

### 2. useMemo hook
Returns a memoized `value`

`useMemo` will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

NOTE:\
Don’t do anything there that you wouldn’t normally do while rendering.\
For example, side effects belong in `useEffect`, not `useMemo`.

### 3. useCallback hook
Returns a memoized `callback`

`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.

NOTE:\
`useCallback()` returns memoized callback.\
`useMemo()` only returns memoized value.

### 4. useReducer hook
An alternative to `useState`.

`useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

### 5. useLayoutEffect hook
NOTE: (The difference between `useEffect` and `useLayoutEffect`)\
-- Steps before `useEffect` function runs:\
1- User take action -> clicking some button\
2- React changes the state\
3- React handles DOM mutation\
4- Browser prints DOM changes to browser screen\
5- After browser prints DOM changes to screen then `useEffects` fires
 
Important: (in `useLayoutEffect`)\
4- `useLayoutEffects` fires before browser prints DOM changes to browser screen\
5- Browser prints...\
6- After browser prints DOM...

### 6. useImperativeHandle hook
`useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`.

NOTE:\
`useImperativeHandle` should be used with `forwardRef`:\
`BootstrapInput = forwardRef(BootstrapInput)`.

### 7. useDeferredValue hook
`useDeferredValue` accepts a value and returns a new copy of the value that will defer to more urgent updates.

NOTE:\
If you want to prevent a child component from re-rendering during an urgent update, you must also memoize that component with `React.memo` or `React.useMemo`

### 8. useTransition hook
Returns a stateful value for the pending state of the transition, and a function to start it.

`startTransition` lets you mark updates in the provided callback as transitions.\
`isPending` indicates when a transition is active to show a pending state.

### 9. create Custom hooks
Create `useFetch` and `useUpdateLogger` hooks and import at `CustomHooks.jsx`.

### 10. useDebugValue hook
`useDebugValue` can be used to display a label for custom hooks in React DevTools.


### 11. useId hook
`useId` is a hook for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.

### 12. Rules of Hooks
`Don’t call Hooks inside loops, conditions, or nested functions.` Instead, always use Hooks at the top level of your React function, before any early returns.

`Only Call Hooks from React Functions`\
Don’t call Hooks from regular JavaScript functions. Instead, you can:

✅ Call Hooks from React function components.\
✅ Call Hooks from custom Hooks (we’ll learn about them on the next page).