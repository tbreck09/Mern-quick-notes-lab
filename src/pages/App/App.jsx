import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NotePage from '../NotePage/NotePage';
import NoteForm from '../../components/NoteForm/NoteForm'

export default function App() {
  const [user, setUser] = useState(getUser());
  const newNotes=[]
  const [notes, setNotes]= useState(newNotes);
  
  function addNote(note){
    setNotes([...notes, note])
  }
  
  return (
    <main className="App">
      {user ? 
       <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/notes/new" element={<NoteForm notes={notes} addNote={addNote} />} />
            <Route path="notes/" element={<NotePage addNote={addNote} notes={notes} />} />
           </Routes>
        </>
       : 
        <AuthPage setUser={setUser} />
        }
    </main>
  );
}