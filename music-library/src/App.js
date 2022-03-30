import axios from "axios";
import React, { useEffect, useState } from 'react';
import SongTable from './Components/SongTable/SongTable';
import SearchBar from './Components/SearchBar/SearchBar';
import TitleBar from "./Components/TitleBar/TitleBar";


function App() {
  const [search,setSearch] = useState ('');
  const [songs, updateSongs] = useState([]);
  const [input,setInput] = useState([]);
  

    const filterSongs = () => {
        console.log(search);
        let matchingSongs = songs.filter((song) => {
          if(song.title.includes(search) ||song.artist.includes(search) || song.album.includes(search) ||song.releaseDate.includes(search) || song.genre.includes(search) ){
          return true;
          }

      }) 
      setInput(matchingSongs);
    }
    

    useEffect(() => {
      filterSongs();
    },[search]);


    async function getSongs() {
        try {
            let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
            console.log(response.data);
            updateSongs(response.data);
            setInput(response.data);
            
        }
        catch (ex) {
            console.log('Error in API', ex);

        }
    }

    useEffect(() =>  { 
      getSongs();
    },[]);
   
    return (
      <div className="App">
        <TitleBar/>
        <SearchBar search={search} setSearch={setSearch} />
        <SongTable songs={input}/>
        
        
      </div>
    );
  
}

export default App;
