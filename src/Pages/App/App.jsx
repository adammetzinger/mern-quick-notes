import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NotePage from '../NotePage/NotePage';
import * as notesApi from '../../utilities/notes-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function getAllNotes() {
      const allNotes = await notesApi.getNotes()
      setNotes(allNotes);
    }
    getAllNotes()
  }, [])

  async function handleCreateNote(newNote) {
    const note = await notesApi.createNote(newNote);
    setNotes([...notes, note]);
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<NotePage notes={notes} handleCreateNote={handleCreateNote}/>}/>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
