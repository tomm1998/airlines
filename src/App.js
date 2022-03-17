import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import fetchJsonp from 'fetch-jsonp';
import alliances from './alliancesFilter'


function App() {
  const [airlines, setAirlines] = useState([]);
  const [checked, setChecked] = useState(alliances.map(alliance => ({ ...alliance, check: false })));

  useEffect(() => {
    fetchJsonp("/homework", {
      jsonpCallback: 'jsonp'
    })
      .then((res) => res.json())
      .then((data) => setAirlines(data))
  }, []);


  const handleCheck = (e) => {
    const newChecked = checked.map((elem ) => {
      if(elem.code === e.target.id){
          elem.check = e.target.checked;
          return elem;
      }
      else
          return elem;
    })
    setChecked(newChecked);
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
            {
              alliances.map((checkbox, index) => {
                (
                  <label key={index} className='label-filter'>
                    <input type='checkbox' id={checkbox.code} onChange={(e) => handleCheck(e)} className='box-filter' />
                      {checkbox.alliance}
                  </label>
                )
              })
            }
          </div>
        </div>
        <div className='body'>
          { 
            airlines.length > 0 &&
            airlines.map((elem, index) => {
              if(checked.every((value) => value.check === false))
                return <Card key={index} data={elem} />
              else {
                for(let i = 0 ; i < checked.length ; i++) {
                  if(checked[i].code === elem.alliance && checked[i].check) {
                    return <Card key={index} data={elem}  />
                  }
                }
              }
            }) 
          }
        </div>
      </div>
    </div>
  );
}

export default App;
