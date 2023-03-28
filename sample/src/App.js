
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <h1>HELLO</h1>
      <h2>This is the React</h2>
      <BrowserRouter>
      <Navbar></Navbar>
      </BrowserRouter>
      <Login></Login>
    </div>
  );
}

export default App;
