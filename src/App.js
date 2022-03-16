import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import fetchJsonp from 'fetch-jsonp';

function App() {
  const [airlines, setAirlines] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {

    fetchJsonp("/homework", {
      jsonpCallback: 'jsonp'
    })
      .then((res) => res.json())
      .then((data) => setAirlines(data))
  }, []);

  /*const handleCheckbox = (value, e) => {
    if (e.target.checked) {
      let selectedData = data.filter((d) => d.model === value);

      setFilteredData([...filteredData, ...selectedData]);
    } else {
      let unselected = filteredData.filter((d) => {
        return d.model !== value;
      });
      setFilteredData(uncheckedData);
    }
  }*/

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
              <input type='checkbox' id='checkbox-1' className='box-filter' checked={checked[0]} onChange={(e) => handleChange(e)} />
              Oneworld
            </label>
            <label className='label-filter'>
              <input type='checkbox' id='checkbox-2' className='box-filter' checked={checked[1]} />
              Sky Team
            </label>
            <label className='label-filter'>
              <input type='checkbox' id='checkbox-3' className='box-filter' checked={checked[2]} />
              Star Alliance
            </label>
          </div>
        </div>
        <div className='body'>
          {airlines.length > 0 &&
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
