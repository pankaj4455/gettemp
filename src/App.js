import { useEffect, useState } from "react";
import "./App.css"

function App() {
  const[data,setData]=useState()
  const[datas,setDatas]=useState();
  const change=(e)=>{
    setData(e.target.value);
  }
 
 useEffect(()=>{
  const fetchdata=async ()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=733f43c1bbd894ee884dde9e92eae0cc`
    var res=await fetch(url);
    const out= await res.json();
  
    setDatas(out.main.temp);

    
    }
    fetchdata()
  })
 
 
  return (
    <>
  <h3 id="h3">  Single Page Application & Live Search</h3>
    <div className="out">
      
    <input type="text" value={data} onChange={change} placeholder="Search location name"/>
    
    <h2>{data} {datas}°Cel</h2>
      
    </div>
  
  
    </>
  );
}

export default App;
