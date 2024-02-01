import {useEffect} from 'react'
import { getPosts } from './api/getapi'
import { getComments } from './api/getCommentsApi';

import './App.css';

function App() {
  useEffect (()=>{
    getPosts().then(posts=>console.log(posts));
    getComments().then(comments=>console.log(comments));

  },[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
