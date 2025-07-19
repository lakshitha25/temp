import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';   //new functional component
import ColorChanger from './ColorChanger';

function App() {
  return (
  <div>
    <h1>Hello, I’m learning React!</h1>
    <p>This is my first React app, and I’m excited to build more.</p>
    <Greeting />   {/* Using the component */}
     <ColorChanger />
     <h1>Lakshitha</h1>
  </div>
);

}

export default App;

