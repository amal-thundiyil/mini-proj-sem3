
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  // const [queryResult, setQueryResult] = useState();
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');

  var eth = 100;
  const deduction = 0.0000005135;

  const sampleJSON = {
    "score": 0.75,
    "start": 201,
    "end": 230,
    "answer": "Amazonia or the Amazon Jungle"
  }

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

  useEffect(()=>{
    console.log('Blockchain connection being established...');
    console.log('Blockchain connection successfull with account 0xab5801a7d398351b8be11c439e05c5b3259aec9b!');
  },[]);

  const queryMedicalRecord = async (query) => {
    eth = eth - deduction
    console.log("Transaction from -> 0xab5801a7d398351b8be11c439e05c5b3259aec9b");
    console.log("Final balance: "+eth);
    // console.log(data);


    let data = await axios.get(`/query?question=${query}`);
    // let data = sampleJSON;
    // console.log(data);

    // console.log(data.score);
    
    // setAnswer(data.answer);
    let parsedData = JSON.parse(JSON.stringify(data));
    // console.log(parsedData.answer);
    console.log(parsedData);
    setAnswer(parsedData.answer);

    // console.log(parsedData.score);
    // setAnswer(parsedData.answer);
    // setQueryResult(parsedData.result);
  }

  return (
    <div className="App">
      <input value={query} onChange={(e) => handleChange(e)} placeholder="Enter your question..."></input>
      <button onClick={() => queryMedicalRecord(query)}>Query</button>
      <p>{answer}</p>
    </div>
  );
}

export default App;
