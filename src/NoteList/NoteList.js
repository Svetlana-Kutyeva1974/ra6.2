import PropTypes from 'prop-types'
//import Clock from '../Clock/Clock';
import Note from '../Note/Note';
import './NoteList.css'

function NoteList({ notes, onDelete }) {
  console.log(' массив в нотелист',notes);
  const noteList = notes.map((item) => <Note className='clock' note= {item} key={item.id} onDelete={onDelete} />)
  console.log(' массив tree в нотелист',noteList);
  return (
    <div className='clock-list'>
      {noteList}
    </div>
  )
}

NoteList.propTypes = {
  notes: PropTypes.array,
  onDelete:  PropTypes.func,
}

export default NoteList
