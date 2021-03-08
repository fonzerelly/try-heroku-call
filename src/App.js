import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [d, setD] = useState('hh:mm:ss');
  // fetch('test.json')
  fetch('api/date')
    .then((response) => response.text())
    .then((data) => {
      const result = data.match(/\d\d:\d\d:\d\d/)
      console.log(result);
      setD(result)
    })
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ed läufd, wasn wahnsinn!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{d}</h1>
        <h2>TEST</h2>
      </header>
    </div>
  );
}

export default App;
