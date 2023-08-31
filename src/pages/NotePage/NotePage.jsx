import {useEffect, useState } from 'react';
import { getAllNotes } from '../../utilities/notes-api';


export default function NotePage({ addNote, notes }) {

const [pageNotes, setPageNotes]= useState([])


  useEffect(() => {
    async function fetchNotes(){
      let allNotes= await getAllNotes();
    setPageNotes(allNotes)
    }
    fetchNotes()
  }, []);

  return (
    <div>
      <h1>Note Page</h1>
      <ul>
        {pageNotes.map(note => (
          <li key={note.createdAt}>
            <p>{note.text}</p>
            <p>{new Date(note.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}