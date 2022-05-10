import React, { useState } from 'react';
import Form from '../Form/Form';
//import List from '../List/List';
import NoteList from '../NoteList/NoteList';
import {nanoid} from 'nanoid';
import './Notes.css';


function Notes(props) {
  console.log(' name component', props.name);
  // const [clocks, setClocks] = useState([]);
  const [notes, setNotes] = useState([]);

  const loadActual = () => {
    fetch(process.env.REACT_APP_NOTES_URL)
    .then(response => response.json())
    .then(notes => {
    /*const findUSD = rate => rate.code === 'USD';
    const rate = rates.find(findUSD).value
    */
    //setNotes({ notes });
    setNotes(notes);
    console.log(' массив заметок после set',notes);
    });
    //return notes;
  }


  function onDelete(id) {
    const copy = notes.filter((e) => e.id !== id);
    setNotes(copy);
  }
/*
  function submitForm(form) {
    if (form.name === '' || form.timeZone === '') return;
    const copy = [...clocks, {id: nanoid(), name: form.name, timeZone: form.timeZone}];
    setClocks(copy);
  } 
*/
function submitForm(form) {
  if (form.note !== '') {
    const copy = [...notes, {id: nanoid(), note: form.note}];
    setNotes(copy);
  }
} 

  return (
    <>
      <span>Notes      </span>
      <button className='reload' onClick={loadActual} style={{color: 'green'}}>
        &#128260;
      </button>
      <NoteList items={notes} onDelete={onDelete}/>
      <Form submitForm={submitForm}/>
    </>
  )
}

Notes.defaultProps = {
  name: 'Компонент Notes'
  };

export default Notes;


// <List clocks={clocks} onDelete={onDelete}/>