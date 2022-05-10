import React, { useState } from 'react';
import Form from '../Form/Form';
//import List from '../List/List';
import NoteList from '../NoteList/NoteList';
import {nanoid} from 'nanoid';
import './Notes.css';


function Notes() {
  
  const [clocks, setClocks] = useState([]);
  const [notes, setNotes] = useState([]);

  const loadActual = () => {
    fetch(process.env.REACT_APP_NOTES_URL)
    .then(response => response.json())
    .then(notes => {
    /*const findUSD = rate => rate.code === 'USD';
    const rate = rates.find(findUSD).value
    */
   console.log(' массив заметок',notes);
    setNotes({ notes });
    console.log(' массив заметок после set',notes);
    });
    //return notes;
  }


  /*function onDelete(id) {
    const copy = clocks.filter((e) => e.id !== id);
    setClocks(copy);
  }
  */

  function onDelete2(id) {
    const copy = notes.filter((e) => e.id !== id);
    setNotes(copy);
  }

  function submitForm(form) {
    if (form.name === '' || form.timeZone === '') return;
    const copy = [...clocks, {id: nanoid(), name: form.name, timeZone: form.timeZone}];
    setClocks(copy);
  } 

  return (
    <>
      <span>Notes      </span>
      <button className='reload' onClick={loadActual} style={{color: 'green'}}>
            &#128260;
      </button>
      <NoteList notes={notes} onDelete={onDelete2}/>
     
      <Form submitForm={submitForm}/>
    </>
  )
}

export default Notes

// <List clocks={clocks} onDelete={onDelete}/>