// import {useEffect,useState} from 'react'
// import { getPosts } from './api/getapi'
// import { getComments } from './api/getCommentsApi';

import './App.css';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';
import FunctionClick from './components/FunctionClick';
function App() {
  // const [data,setData]=useState(null);
  // const [edata,setEdata]=useState(null);
  // useEffect (()=>{
  //   getPosts().then(posts=>setData(posts));
  //   getComments().then(comments => setEdata(comments));

  // },[])
  return (
    <div className="App">
     {/* {

      // data ? data.map((e)=> <li>{e.title}</li> )  :"no data"
      edata ? edata.map((e)=> <li>{e.email}{e.name}</li> ) : "no data"
     } */
    
    //  <FunctionClick />
    //  <ClassClick />
     <EventBinding/>
     
    
     }
    </div>
  );
}

export default App;
