// npm install --save react react-dom
import logo from './logo.svg';
import './App.css';
import ContactForm from "./components/ContactForm";
import axios from "axios";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
        <p>hello</p>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      {/*  <ContactForm/>*/}
        {<SignUp/>}
    </div>
  );
}

export default App;
