import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFor from './components/HookCounterFor';

function App() {
  return (
    <div className="App">
     <HookCounter />
     <br />
     <HookCounterTwo />
     <br />
     <HookCounterThree />
     <br />
     <HookCounterFor />
     <br />
     <br />
    </div>
  );
}

export default App;
