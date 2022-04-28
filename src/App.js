
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [queryResult, setQueryResult] = useState();
  const [query, setQuery] = useState('');

  // var question = ""
  const jsonToTable = require('json-to-table');
  
  const myRecords = [
  {
      name:'Bob',
      address:{zip:12345, state:'Euphoria'}
  },
  {
      name:'Jon',
      address:{street:'1234 Main St.', state:'Arizona'}
  }];
  const tabled = jsonToTable(myRecords);

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const queryMedicalRecord = async () => {
    let data = await axios.get(`/query/${query}`);
    console.log(data);
    let parsedData = JSON.parse(JSON.stringify(data));
    setQueryResult(parsedData.result);
  }

  return (
    <div className="App">
      <input value={query} onChange={(e) => handleChange(e)} placeholder="Enter your question..."></input>
      <button onClick={() => queryMedicalRecord(query)}>Query</button>
      <p>{tabled}</p>
    </div>
  );
}

export default App;
