import React from 'react'
import {MdSearch} from 'react-icons/md'
import { useState } from 'react/cjs/react.development'
const Search = ({handleSearchNote}) => {
    const [searchText, setSearchText] = useState('')


    return (
        <div className="search">
            <MdSearch className="search-icon" size="1.3em"/>
            <input onChange={(e)=>{handleSearchNote(e.target.value)}} type="text" name="" id="" placeholder="Type to search..."/>
        </div>
    )
}

export default Search
