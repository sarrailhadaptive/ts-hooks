import { useState } from 'react'
import './App.css'
import UseContextComponent from './components/UseContextComponent'
import UseEffectComponent from './components/UseEffectComponent'
import UseReducerComponent from './components/UseReducerComponent'
import UseStateComponent from './components/UseStateComponent'
import UseRefComponent from './components/UseRefComponent'

function App() {
  return (
    <div className='App'>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useRef</h1>
      <UseRefComponent />
    </div>
  )
}

export default App
