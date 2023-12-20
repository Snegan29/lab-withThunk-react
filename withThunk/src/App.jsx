import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchDataFunc, dataFetching } from './redux/action';

function App() {
  const [showData, setShowData] = useState(false);
  const data = useSelector((store) => store.data);
  console.log(data);

  const dispatch = useDispatch();

  const getData = () => {
    setShowData(!showData); // Toggle the state
    if (!showData) {
      dispatch(dataFetching());
    } 
  };

  return (
    <>
    <button onClick={getData} className='button'>
      {showData ? 'Hide Data' : 'Fetch Data Button'}
    </button>
    {showData &&
      data.map((item) => (
        <div key={item.id} className='box'>
          <p> Name: {item.name}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}
  </>
  );
}

export default App;
