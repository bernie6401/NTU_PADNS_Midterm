/* -----------------Original Code----------------- */
/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
*/

/* -----------------Function Component----------------- */
/*  The function App() will return JSX expression
    and the App function is exported as default.
    React will render the element returned from src/App.js to your HTML
*/
/*
import './App.css';

function App() {
  return (
    <div>
      <h1>
        This is the normal HTML syntax you know
      </h1>
    </div>
  );
}

export default App;
*/

/* -----------------HTML + JS----------------- */
/*  JS syntax is contained in {} */
/*
import './App.css';

function App() {
  const name = 'Eric'
  return (
    <div>
      <h1>Hello, { name }</h1>
    </div>
  );
}

export default App;
*/

/* -----------------Import External File----------------- */
/*  Must use import to let React render the file path properly */
/*
import './App.css';
import logo from './logo.jpg';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;
*/

/* -----------------XSS Protection----------------- */
/*  It has XSS protection property that attacker cannot hack our page */
/*
import './App.css';

function App() {
  const xss = '<h1>injection failed</h1>'
  return (
    <div>
      { xss }
    </div>
  );
}
export default App;
*/

/* -----------------Modules - Import/Export----------------- */
/*  The parameter without braces corresponds to default and
    the others will correspond to parameter with braces
*/
/*
import './App.css';
import a, { name } from './practice_module_import_export'

function App() {
  return (
    <div className="App">
      {a}, {name}
    </div>
  );
}

export default App;
*/


/********************************************************************************/

/* -----------------React State - Change Color----------------- */
/*  useState is a preserved word provided by React */
/*
import { useState } from 'react';
function App() {
  const [color, setColor] = useState('blue'); // useState contained initial state
  // It'll return 2 JS objects in array -> a value and a function to update the value
  // It means if we call setColor, then the parameter, color, will change

  const clickHandler = () => {
    setColor(prevColor => prevColor === 'blue' ? 'red' : 'blue')
    // It's a arrow function, prevColor is a incoming parameters, and due to there's just one param
    // we omit the parentheses and it'll return a string based on prevColor is blue or red
  }
  return (
    <div>
      <button onClick={clickHandler}>Button</button>
      <div style={{
        backgroundColor: color,
        height: '6rem', width: '6rem'
      }}></div>
      <div>{color}</div>
    </div>
  );
}
export default App;
*/

/* -----------------React State - Simple GPA Calculator----------------- */
/*
import { useState } from 'react';
function App() {
  const [score, setScore] = useState(0);
  // 
  //  @type {React.ChangeEventHandler<HTMLInputElement>}
  //  
  const inputHandler = (e) => {
    const parsed = Number.parseInt(e.target.value)
    if (Number.isNaN(parsed)) return
    setScore(parsed)
  }
  const grade = score >= 90
    ? 'A+'
    : score >= 85
      ? 'A'
      : score >= 80
        ? 'A-'
        : 'F'
  return (
    <div>
      <input type="number" onChange={inputHandler} />
      <div>{grade}</div>
    </div>
  );
}
export default App;
*/


/********************************************************************************/

/* -----------------React Effect - Change Document Title----------------- */
/* useEffect  is also a preserved words */
/*
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);  // 0 is the initial value of count
  const [color, setColor] = useState('blue');
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`
  // }, [count]) // The function will be called only if parameter count is updated
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })  // The function will be called if any one of parameter is updated

  const clickHandler = () => {
    setColor(prevColor => prevColor === 'blue' ? 'red' : 'blue')
    setCount(prevCount => prevCount + 1)
  }
  return (
    <div>
      <button onClick={() => {
        setCount(prevCount => prevCount + 1)
      }}>Click</button>

      <button onClick={clickHandler}>Button</button>
      <div style={{
        backgroundColor: color,
        height: '6rem', width: '6rem'
      }}></div>
      <div>{color}</div>
    </div>
  );
}

export default App;
*/


/********************************************************************************/

/* -----------------React Props - Split React Component----------------- */
/*
import Welcome from './practice_Welcome'
import ColorText from './practice_ColorText'

function App() {
  return (
    <div>
      {/* You can pass parameter to external function //}
      <Welcome name="Eric" />
      <ColorText color="red" message="OwO" />
    </div>
  );
}

export default App;
*/

/* -----------------React Props + State----------------- */
/*
import { useState } from 'react'
import Emoji from './practice_Emoji'
import MyButton from './practice_MyButton'
function App()
{
  const [symbol, setSymbol] = useState('seal')
  const switchSymbol = () => 
  {
    setSymbol(prevSymbol => prevSymbol === 'seal' ? 'shark' : 'seal')
  }
  return(
    <div>
      <Emoji symbol={symbol} />
      <MyButton onClick={switchSymbol} />
    </div>
  );
}
export default App;
*/


/********************************************************************************/

/* -----------------React Form Example----------------- */
// /*
import { useState } from 'react'
function App() {
  const [textInput, setTextInput] = useState({ name: '', message: '' })
  const [comments, setComments] = useState(
    /** @type {{name: string, message: string}[]} */([])
  )
  // next page content
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input name="name" value={textInput.name} onChange={handleTextInputChange} />
        <input name="message" value={textInput.message} onChange={handleTextInputChange} />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {comments.map((comment, index) =>
          <div key={index}>{comment.name}: {comment.message}</div>
        )}
      </div>
    </div>
  );
}
export default App;

/** @type {React.ChangeEventHandler<HTMLInputElement>} */
const handleTextInputChange = ({ target: { name, value } }) => {
  // const { name, value } = event.target
  // obj = { ...prev }; obj[name] = value
  setTextInput(prev => ({
    ...prev,
    [name]: value,
  }))
}

/** @type {React.FormEventHandler<HTMLFormElement>} */
const handleFormSubmit = (event) => {
  setComments(prev => [...prev, textInput])
  setTextInput({ name: '', message: '' })
  event.preventDefault();
}

// */