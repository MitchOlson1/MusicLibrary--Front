import axios from "axios";
import React, { useEffect, useState } from 'react';
import SongTable from './Components/SongTable/SongTable';
import SearchBar from './Components/SearchBar/SearchBar';
import NavBar from './Components/NavBar/NavBar';


function App() {
  const [search,setSearch] = useState ('');
  const [songs, updateSongs] = useState([{}]);
  
    useEffect(() =>  { 
        getSongs();
    },[]);

    async function getSongs() {
        try {
            let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
            console.log(response.data);
            updateSongs(response.data);
        }
        catch (ex) {
            console.log('Error in API', ex);

        }
    }
  
   
    return (
      
      <div className="App">
        <SongTable songs={songs}/>
        <SearchBar search={search} setSearch={setSearch}/>
      </div>
    );
  
}

export default App;
