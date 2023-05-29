import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Add Your List Here</h1>
      <div className="addItems">
      <input type="text" className="input" placeholder="type the text"></input>
      <i className="fa fa-plus add-btn" style={{color:"red"}}></i>
      </div>
    </div>
  );
}

export default App;
