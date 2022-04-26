
import './App.css';

function App() {

  const queryMedicalRecord = () => {
    let data = axios.get('/query')
  }

  return (
    <div className="App">
      <input placeholder="Enter your question..."></input>
      <button>QUE</button></input>
    </div>
  );
}

export default App;
