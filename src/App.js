import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import fetchJsonp from 'fetch-jsonp';

function App() {
  const [airlines, setAirlines] = useState([]);
  const [checked, setChecked] = useState([
    {alliance: "OW", checked: false},
    {alliance: "ST", checked: false},
    {alliance: "SA", checked: false}
  ]);

  useEffect(() => {
    fetchJsonp("/homework", {
      jsonpCallback: 'jsonp'
    })
      .then((res) => res.json())
      .then((data) => setAirlines(data))
  }, []);

  const handleCheck = (e) => {
    const newChecked = checked.map((elem, i ) => {
      if(elem.alliance === e.target.value){
          elem.checked = e.target.checked;
          return elem;
      }
      else
         return elem;
    })
    setChecked(newChecked);
    checked.map((e) => {
      airlines.map((elem, index) => {
        if(e.checked && e.alliance === elem.alliance)
          return console.log("<Card key={index} data={elem} />")
      })
    })
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
              <input type='checkbox' id='checkbox-0' value="OW"  onChange={(e) => handleCheck(e)} className='box-filter' />
              Oneworld
            </label>
            <label className='label-filter'>
              <input type='checkbox' id='checkbox-1' value="ST"  onChange={(e) => handleCheck(e)} className='box-filter' />
              Sky Team
            </label>
            <label className='label-filter'>
              <input type='checkbox' id='checkbox-2' value="SA"  onChange={(e) => handleCheck(e)} className='box-filter' />
              Star Alliance
            </label>
          </div>
        </div>
        <div className='body'>
          { 
            airlines.length > 0 &&
            airlines.map((elem, index) => {
              if(checked.every((value)=> value.checked ===false ) ||
                checked.some((value)=> value.checked=== true && checked.includes((value) => value.alliance === elem.alliance)))
              return <Card key={index} data={elem} />
            }) 
          }
        </div>
      </div>
    </div>
  );
}

export default App;
