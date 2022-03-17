import fetchJsonp from 'fetch-jsonp';

const fetchAirlines = () => fetchJsonp("/homework", {
    jsonpCallback: 'jsonp'
  })
    .then((res) => res.json())
    .then((data) => setAirlines(data))

export default fetchAirlines;
    