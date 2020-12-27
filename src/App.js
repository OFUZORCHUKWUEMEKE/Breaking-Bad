import React , {useState,useEffect} from 'react'
import './App.css';
import Header from './Header';
import axios from 'axios';

import CharacterGrid from './CharacterGrid';
import Search from './Search';

function App() {

  const [items,setItems] =useState([])
  const [isloading,setIsloading] =useState(true)
  const [query,setQuery] =useState("")

  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data)
      setIsloading(false)
    }
    fetchItems() 
  },[query])
  return (
     <div className="container">
       <Header/>
       <Search getQuery={(q)=>setQuery(q)}/>
       <CharacterGrid  isLoading={isloading} items={items}/>
     </div>
  );
}

export default App;
