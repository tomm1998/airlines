import logo from './Logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './components/Card';
import fetchJsonp from 'fetch-jsonp';

function App() {
const[airlines, setAirlines] = useState([]);
const[checked, setChecked] = useState(false);
const[checked2, setChecked2] = useState(false);
const[checked3, setChecked3] = useState(false);

useEffect( () =>{
  fetchJsonp("/homework", {
    jsonpCallback: 'jsonp'
  })
  .then((res) => res.json())
  .then((data) => setAirlines(data))
}, []);

const handleChange = (e) =>{
  console.log(e);
    if(!checked){
      const filteredFlights = airlines.filter( (item) => item.alliance === e.target.value);
      setAirlines(filteredFlights);
      setChecked(true);
    }else{
      fetchJsonp("/homework", {
        jsonpCallback: 'jsonp'
      })
      .then((res) => res.json())
      .then((data) => setAirlines(data))
      .then(setChecked(false));
    }
}
const handleChange2 = () =>{
  if(!checked2){
    const filteredFlights = airlines.filter( (item) => item.alliance === 'ST');
    setAirlines(filteredFlights);
    setChecked2(true);
  }else{
    fetchJsonp("/homework", {
      jsonpCallback: 'jsonp'
    })
    .then((res) => res.json())
    .then((data) => setAirlines(data))
    .then(setChecked2(false));
  }
}

const handleChange3 = () =>{
  if(!checked3){
    const filteredFlights = airlines.filter( (item) => item.alliance === 'SA' || item.alliance==='ST');
    setAirlines(filteredFlights);
    setChecked3(true);
  }else{
    fetchJsonp("/homework", {
      jsonpCallback: 'jsonp'
    })
    .then((res) => res.json())
    .then((data) => setAirlines(data))
    .then(setChecked3(false));
  }
}
  return (
    
    <div className="App">
      <div className='top-bar'>
        <img src={logo} className='top-logo' alt=''></img>   
      </div>
      <div className='container'>
        <div className='title'>
            Airlines
        </div>
        <div className='filter'>
          <div className='filter-title'>
            Filter by Alliances
          </div>
          <div className='checkbox-filter'>
            <label className='label-filter'>
              <input type='checkbox' className='box-filter' value='OW' checked={checked} onChange={(e) => handleChange}/>
                Oneworld
            </label>
            <label className='label-filter'>
              <input type='checkbox' className='box-filter' checked={checked2} onChange={handleChange2}/>
                Sky Team
            </label>
            <label className='label-filter'>
              <input type='checkbox' className='box-filter' checked={checked3} onChange={handleChange3}/>
                Star Alliance
            </label>
          </div>
        </div>
        <div className='body'>
          {airlines.length>0 && 
            airlines.map((elem, index) => {
              return <Card key={index} data={elem} />
            })
            }
        </div>
      </div>
    </div>
  );
}

export default App;
