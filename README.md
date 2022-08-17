## 🚀 Learning and using React hooks

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

`useMemo` will only recompute the memoized value when one of the dependencies has changed.\
This optimization helps to avoid expensive calculations on every render.

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
Returns a memoized `callback`

`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.

NOTE:\
`useCallback()` returns memoized callback.\
`useMemo()` only returns memoized value.

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