import React, { useState, useEffect } from 'react'
import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'
import { nanoid } from 'nanoid';

function App() {

  const [notes, setNotes] = useState([])
  // {
  //   id: nanoid(),
  //   text: "This is my first note!",
  //   date: "15/06/2025"
  // },
  // {
  //   id: nanoid(),
  //   text: "This is my Second note!",
  //   date: "16/06/2025"
  // },
  // {
  //   id: nanoid(),
  //   text: "This is my Third note!",
  //   date: "17/06/2025"
  // },
  // {
  //   id: nanoid(),
  //   text: "This is my new note!",
  //   date: "18/06/2025"
  // },

  // const [searchText, setSearchText] = useState('');


  // useEffect(() => {
	// 	const savedNotes = JSON.parse(
	// 		localStorage.getItem('react-notes-app-data')
	// 	);

	// 	if (savedNotes) {
	// 		setNotes(savedNotes);
	// 	}
	// }, []);


  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes && savedNotes.length > 0) {
      setNotes(savedNotes);
    }
  }, []);
  

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id )
    setNotes(newNotes)
  }

  return (
    <>
      <div className="relative w-full h-screen bg-[#1C1917]">
        <Background/>
        <Foreground 
        notes = {notes.filter((note) => 
        note.text.toLowerCase())}
        handleAddNote = {addNote}
        handleDeleteNote = {deleteNote}/>
      </div>
    </>
  )
}

export default App
