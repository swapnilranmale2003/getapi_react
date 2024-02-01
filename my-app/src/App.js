import {useEffect,useState} from 'react'
import { getPosts } from './api/getapi'
// import { getComments } from './api/getCommentsApi';

import './App.css';

function App() {
  const [data,setData]=useState(null);
  useEffect (()=>{
    getPosts().then(posts=>setData(posts));
    // getComments().then(comments=>console.log(comments));

  },[])
  return (
    <div className="App">
     {
      data ? data.map((e)=> <li>{e.title}</li> )  :"no data"
     }
    </div>
  );
}

export default App;
