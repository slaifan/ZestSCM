import React from 'react';
import './App.css';
import BarChart from './components/BarChart'

const testData = [5,10,15,20,25,5];
const w = 500;
const h = 400;
const c = "green";

function App() {
  return (
    <div className="App">
        <h1> graph:</h1>
        <BarChart data={testData} w={w} h={h} c={c}/>
    </div>
  );
}

export default App;
