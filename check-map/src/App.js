import React  ,{useState} from "react";
import './App.css';
import axios from "axios";


const key = 'eca752723088c64f1f907c9448fcfcbb';


function App () {
  const [data,setData] =useState();
  const[city,setCity] = useState("");

 const fetchData = async ()=>{
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${key}`);
    setData(response.data);
    console.log(response)
  } catch (error) {
    alert("Please Enter City Name Correctly")
  }
 }
  return (
    <div className="App">
       <div className='home'>
       <div className='home-left' ><h1>Check<span className= "color">Weather</span></h1></div>
       <div className=' home-right'> 
        <a href="https://openweathermap.org/weather-dashboard" className="allows"><h4 >Dashboard</h4></a>
        <a href="https://openweathermap.org/guide" className="allows"><h4 >Guide</h4></a>
        <a href="https://openweathermap.org/api" className="allows"><h4 >API</h4></a>
        <a href="https://openweathermap.org/price" className="allows"><h4 >Pricing</h4></a>
        <a href="https://openweather.co.uk/blog/category/weather" className="allows"><h4 >Blogs</h4></a>

       
        </div>
       </div>
       <div className="home-0">
       <div className = "home-1">
          <div className = "container">
               <h1 className = "check">Check <span className= "color">Weather</span></h1>
               <input type ="text" value={city} onChange={e => setCity(e.target.value)} className = "input" placeholder = " Enter Your City Name "/><br></br>
               <button onClick={fetchData} className="button">Check</button>
               <div className="new-database">
                { data && (
                  <div className="new-db"><h3 className="h3">City : {data.name},{data.sys.country},<br></br>
                  Temperature : {data.main.temp},<br></br>
                  Humidity : {data.main.humidity},<br></br>
                  Latitude : {data.coord.lat},<br></br>
                  Longitude : {data.coord.lon},<br></br>
                  Sunrise : {data.sys.sunrise},<br></br>
                  Sunset : {data.sys.sunset},<br></br>
                  Wind : {data.wind.speed}

                  </h3></div>
                  
                )}
               </div>
               </div>
          </div>
       </div>
    </div>
  );
}

export default App;
