## 🚀 Learning and using React hooks

### Getting to know useRef hook

When to Use Refs

  1. Managing focus, text selection, or media playback.
  2. Triggering imperative animations.
  3. Integrating with third-party DOM libraries.\
  `Avoid using refs for anything that can be done declaratively.`

NOTE:\
`useRef` is very similar to `State`, with the difference that
when you change the value of the useRef.current,
it is not re-rendered
