import { useState, useEffect } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search'
import Header from './components/Header'
import { nanoid } from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: 'This is my first note!',
    date: '15/04/2021',
  }, {
    id: nanoid(),
    text: 'This the second one',
    date: '30/05/2021',
  }, {
    id: nanoid(),
    text: 'Third one here!',
    date: '10/06/2021',
  },
  {
    id: nanoid(),
    text: 'Forth note here!',
    date: '10/08/2021',
  },
  ])

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes])




  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((item) => item.id !== id)
    setNotes(filteredNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>

      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>

    </div>

  )
}


export default App;
