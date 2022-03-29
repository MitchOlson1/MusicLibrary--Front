import React, { useState } from 'react';



const SearchBar = (props) => { 
   
    return (  
        <form>
        <label>Search</label>
            <input type = 'text' name="searchWord" value = {props.value} onChange = {(event) => props.setSearch(event.target.value)}/>
        
        </form>
    );
}
 
export default SearchBar;