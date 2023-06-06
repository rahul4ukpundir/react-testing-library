import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Main Heading</h1>
      <h2>Sub Heading</h2>
      <div><label htmlFor='name'>Name</label>
      <input type="text" id="name"/>

      </div>
      <div>
      <label htmlFor='address'>Address</label>
      <textarea id="address"></textarea>
      </div>
      
    </div>
  );
}

export default App;
