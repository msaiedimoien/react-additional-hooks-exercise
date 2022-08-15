# 🚀 Learning and using React hooks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting to know useRef hook

When to Use Refs
There are a few good use cases for refs:

Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.
Avoid using refs for anything that can be done declaratively.

NOTE:
useRef is very similar to State, with the difference that
when you change the value of the useRef.current,
it is not re-rendered
