import { useState, useEffect } from 'react'
import './App.css';
import { db, timestamp } from './firebase'
import Sidebar from './sidebar/sidebar'
import Editor from './editor/editor'


function App() {

  const [notes, setNotes] = useState({
    selectedNoteIndex: null,
    selectedNote: null,
    notes: null
  })

  useEffect(() => {
    db.collection('notes')
      .onSnapshot(snap => {
        const notes = snap.docs.map((note => {
          const data = note.data()
          data['id'] = note.id
          return data
        }))
        setNotes(notes)
        console.log(notes)
      })
  }, [])

  return (
    <div className="App">
      <div className="app-container">
        <Sidebar />
        <Editor />
      </div>
    </div>
  );

}

export default App;
